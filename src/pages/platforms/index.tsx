import ItemsTable from "@/components/ItemsTable";
import { Button, Flex, Heading } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { ListPlatformsQuery } from "@/API";
import { TableValues } from "@/types/types";

export default function Platforms() {
  const router = useRouter();
  const [platform, setPlatform] = useState<TableValues[]>();

  useEffect(() => {
    async function grabPlatform() {
      const allPlatforms = await API.graphql<GraphQLQuery<ListPlatformsQuery>>({
        query: queries.listPlatforms,
      });
      console.log(allPlatforms);

      setPlatform(allPlatforms.data?.listPlatforms?.items as TableValues[]);
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
      {platform === undefined ? (
        ""
      ) : (
        <ItemsTable tableName="Platforms" data={platform} />
      )}
    </>
  );
}
