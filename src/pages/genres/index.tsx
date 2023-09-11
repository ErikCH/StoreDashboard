import ItemsTable from "@/components/ItemsTable";
import { Button, Flex, Heading } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";

import { API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import { GraphQLQuery, GraphQLResult } from "@aws-amplify/api";
import { Genre, ListGenresQuery } from "@/API";
import { useEffect, useState } from "react";

// export interface TableValues {
//   name: string;
//   value: string;
// }
export type TableValues = Pick<Genre, "name" | "value" | "createdAt">;

export default function Genres() {
  const router = useRouter();

  const [genre, setGenre] = useState<GraphQLResult<
    GraphQLQuery<ListGenresQuery>
  > | null>(null);

  const [genre2, setGenre2] = useState<TableValues[]>();

  useEffect(() => {
    async function grabGenres() {
      const allGenres = await API.graphql<GraphQLQuery<ListGenresQuery>>({
        query: queries.listGenres,
      });
      console.log(allGenres);
      setGenre(allGenres);
      setGenre2(allGenres.data?.listGenres?.items as TableValues[]);
    }
    grabGenres();
  }, []);

  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap="1rem"
        width="100%"
        padding="1rem"
        backgroundColor="white"
        className="underline"
      >
        <Heading level={1}>Genres</Heading>
        <Button variation="primary" onClick={() => router.push("/genres/new")}>
          Add Genre
        </Button>
      </Flex>
      {genre?.data === undefined ? (
        ""
      ) : (
        // <ItemsTable tableName="Genres" data={genre?.data!} />
        <ItemsTable tableName="Genres" data={genre2!} />
      )}
    </>
  );
}
