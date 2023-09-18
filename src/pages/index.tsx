import { useEffect, useState } from "react";
import { Button, Heading, View, useAuthenticator } from "@aws-amplify/ui-react";
import { GraphQLQuery } from "@aws-amplify/api";
import { API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import ProductsTable from "@/components/ProductsTable";
import { ListProductsQuery, Product } from "@/API";

export default function Home() {
  const { signOut } = useAuthenticator((context) => [context.signOut]);
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

  return (
    <View className="flex flex-col items-center">
      <Heading level={1} margin="3rem">
        List Of Products!
      </Heading>
      {products === undefined ? (
        "No products available"
      ) : (
        <ProductsTable products={products} />
      )}
      <Button onClick={signOut} variation="primary" margin="2rem">
        Sign Out
      </Button>
    </View>
  );
}
