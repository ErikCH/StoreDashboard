import { Button, Heading, View, useAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import * as queries from "@/graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { ListProductsQuery, Product } from "@/API";
import ProductsTable from "@/components/ProductsTable";

export default function Home() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    async function grabProducts() {
      const allProducts = await API.graphql<GraphQLQuery<ListProductsQuery>>({
        query: queries.listProducts,
      });
      setProducts(allProducts.data?.listProducts?.items as Product[]);
    }
    grabProducts();
  }, []);

  const { signOut } = useAuthenticator((context) => [context.signOut]);
  return (
    <View className="flex flex-col items-center">
      <Heading level={1} margin="3rem">
        List Of Products!
      </Heading>
      {products === undefined || products === null ? null : (
        <ProductsTable products={products} />
      )}
      <Button onClick={signOut} variation="primary" margin="2rem">
        Sign Out
      </Button>
    </View>
  );
}
