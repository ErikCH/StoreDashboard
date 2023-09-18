import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as queries from "@/graphql/queries";
import ProductDetails from "@/components/ProductDetails";
import { ListGenresQuery } from "@/API";
import { TableValues } from "@/types/types";

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
      {genres === undefined ? (
        "No Genres available"
      ) : (
        <ProductDetails headingName="Genres" items={genres} />
      )}
    </>
  );
}
