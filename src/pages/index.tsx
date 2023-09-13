import { Button, Heading, View, useAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import * as queries from "@/graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import {
  GetGenreQuery,
  GetGenreQueryVariables,
  GetPlatformQuery,
  GetPlatformQueryVariables,
  ListProductsQuery,
  Product,
} from "@/API";
import ProductsTable from "@/components/ProductsTable";

export default function Home() {
  const [products, setProducts] = useState<Product[]>();
  const [t, setT] = useState();

  useEffect(() => {
    async function grabProducts() {
      const allProducts = await API.graphql<GraphQLQuery<ListProductsQuery>>({
        query: queries.listProducts,
      });
      // const data = Promise.all(
      //   allProducts.data!.listProducts!.items.map(async (obj) => {
      //     if (!obj?.genreID) return obj;
      //     const l = {
      //       ...obj,
      //       genreID: await grabGenre(obj?.genreID),
      //       platformID: await grabPlatform(obj?.platformID),
      //     };
      //     console.log("obj, obj", l);
      //     return l;
      //   })
      // );
      // console.log("h", await data);
      // setProducts(allProducts.data?.listProducts?.items as Product[]);
      setProducts(allProducts.data?.listProducts?.items as Product[]);
      // setT((await data).values as any);
      // setProducts(data as unknown as Product[]);
    }
    grabProducts();
  }, []);
  async function grabGenre(id: string) {
    const params: GetGenreQueryVariables = {
      id,
    };
    const genre = await API.graphql<GraphQLQuery<GetGenreQuery>>({
      query: queries.getGenre,
      variables: params,
    });
    console.log(genre);
    return genre.data?.getGenre?.name;
  }

  async function grabPlatform(id: string) {
    const params: GetPlatformQueryVariables = {
      id,
    };
    const platform = await API.graphql<GraphQLQuery<GetPlatformQuery>>({
      query: queries.getPlatform,
      variables: params,
    });
    console.log(platform);
    return platform.data?.getPlatform?.name;
  }

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
