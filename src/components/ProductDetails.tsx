import router from "next/router";
import { Button, Flex, Heading } from "@aws-amplify/ui-react";
import ItemsTable from "./ItemsTable";
import { ProductDetailsProps } from "@/types/types";

export default function ProductDetails({
  headingName,
  items,
}: ProductDetailsProps) {
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
        <Heading level={1}>{headingName}</Heading>
        <Button
          variation="primary"
          onClick={() => router.push(`/${headingName.toLowerCase()}/new`)}
        >
          Add {headingName}
        </Button>
      </Flex>
      <ItemsTable tableName={headingName} data={items} />
    </>
  );
}
