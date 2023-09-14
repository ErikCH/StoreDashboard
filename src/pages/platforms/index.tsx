import { useEffect, useState } from "react";

import { API } from "aws-amplify";
import * as queries from "@/graphql/queries";
import { GraphQLQuery } from "@aws-amplify/api";
import { ListPlatformsQuery } from "@/API";
import { TableValues } from "@/types/types";
import ProductDetails from "@/components/ProductDetails";

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
      {platforms === undefined ? null : (
        <ProductDetails headingName="Platforms" items={platforms} />
      )}
    </>
  );
}
