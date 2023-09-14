import { API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { ListGenresQuery } from "@/API";
import { useEffect, useState } from "react";
import { TableValues } from "@/types/types";
import ProductDetails from "@/components/ProductDetails";

export default function Genres() {
  const [genres, setGenres] = useState<TableValues[]>();

  useEffect(() => {
    async function grabGenres() {
      const allGenres = await API.graphql<GraphQLQuery<ListGenresQuery>>({
        query: queries.listGenres,
      });
      setGenres(allGenres.data?.listGenres?.items as TableValues[]);
    }
    grabGenres();
  }, []);

  return (
    <>
      {genres === undefined ? null : (
        <ProductDetails headingName="Genres" items={genres} />
      )}
    </>
  );
}
