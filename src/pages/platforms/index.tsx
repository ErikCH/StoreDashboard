import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import * as queries from "@/graphql/queries";
import ProductDetails from "@/components/ProductDetails";
import { ListPlatformsQuery } from "@/API";
import { TableValues } from "@/types/types";

export default function Platforms() {
  const [platforms, setPlatforms] = useState<TableValues[]>();

  useEffect(() => {
    async function grabPlatform() {
      const allPlatforms = await API.graphql<GraphQLQuery<ListPlatformsQuery>>({
        query: queries.listPlatforms,
      });

      setPlatforms(allPlatforms.data?.listPlatforms?.items as TableValues[]);
    }
    grabPlatform();
  }, []);
  return (
    <>
      {platforms === undefined ? (
        "No platforms available"
      ) : (
        <ProductDetails headingName="Platforms" items={platforms} />
      )}
    </>
  );
}
