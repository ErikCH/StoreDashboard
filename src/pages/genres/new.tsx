import { Flex, Heading, View } from "@aws-amplify/ui-react";
import GenreCreateForm from "@/ui-components/GenreCreateForm";

export default function New() {
  return (
    <>
      <Heading level={1}>Create New Genre</Heading>
      <Flex justifyContent={"center"}>
        <GenreCreateForm
          width="340px"
          border="1px solid black"
          borderRadius={"1 rem"}
        />
      </Flex>
    </>
  );
}
