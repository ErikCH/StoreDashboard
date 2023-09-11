import ItemsTable from "@/components/ItemsTable";
import { Button, Flex, Heading } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import { GraphQLQuery, GraphQLResult } from "@aws-amplify/api";
import { ListPlatformsQuery } from "@/API";

export default function Platforms() {
  const router = useRouter();
  const [platform, setPlatform] = useState<GraphQLResult<
    GraphQLQuery<ListPlatformsQuery>
  > | null>(null);

  useEffect(() => {
    async function grabPlatform() {
      const allGenres = await API.graphql<GraphQLQuery<ListPlatformsQuery>>({
        query: queries.listPlatforms,
      });
      console.log(allGenres);
      setPlatform(allGenres);
    }
    grabPlatform();
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
        <Heading level={1}>Platforms</Heading>
        <Button
          variation="primary"
          onClick={() => router.push("/platforms/new")}
        >
          Add Platform
        </Button>
      </Flex>
      {platform?.data === undefined ? (
        ""
      ) : (
        <ItemsTable tableName="Platforms" data={platform?.data!} />
      )}
    </>
  );
}
