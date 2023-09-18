import { useEffect, useState } from "react";
import { Button, Heading, View, useAuthenticator } from "@aws-amplify/ui-react";
import { GraphQLQuery } from "@aws-amplify/api";
import { API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import ProductsTable from "@/components/ProductsTable";
import { ListProductsQuery, Product } from "@/API";

export default function Home() {
  const { signOut, user } = useAuthenticator((context) => [
    context.signOut,
    context.user,
  ]);

  const [products, setProducts] = useState<Product[]>();

  const session = user.getSignInUserSession();
  const groups = session?.getAccessToken().payload["cognito:groups"];

  useEffect(() => {
    async function grabProducts() {
      const allProducts = await API.graphql<GraphQLQuery<ListProductsQuery>>({
        query: queries.listProducts,
      });
      setProducts(allProducts.data?.listProducts?.items as Product[]);
    }
    grabProducts();
  }, []);

  const onClickDelete = async (id: string) => {
    if (!id) return;
    const res = await fetch("/api/delete", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    if (res.status === 200) {
      const filteredProducts = products?.filter((product) => product.id !== id);
      setProducts(filteredProducts);
    }
  };

  return (
    <View className="flex flex-col items-center">
      <Heading level={1} margin="3rem">
        List Of Products!
      </Heading>
      {products === undefined ? (
        "No products available"
      ) : (
        <ProductsTable
          products={products}
          onClickDelete={onClickDelete}
          admin={groups?.includes("admin")}
        />
      )}
      <Button onClick={signOut} variation="primary" margin="2rem">
        Sign Out
      </Button>
    </View>
  );
}
