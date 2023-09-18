import { useRouter } from "next/router";
import { Flex, Heading } from "@aws-amplify/ui-react";
import GenreCreateForm from "@/ui-components/GenreCreateForm";

export default function NewGenre() {
  const router = useRouter();
  return (
    <>
      <Heading level={1}>Create New Genre</Heading>
      <Flex justifyContent="center">
        <GenreCreateForm
          width="340px"
          border="1px solid black"
          borderRadius="1 rem"
          onSuccess={() => router.push("/genres")}
        />
      </Flex>
    </>
  );
}
