import { useRouter } from "next/router";
import { Flex, Heading } from "@aws-amplify/ui-react";
import ProductCreateForm from "@/ui-components/ProductCreateForm";

export default function Platform() {
  const router = useRouter();
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      width="650px"
      margin="0 auto"
    >
      <Heading level={1}>Create New Product</Heading>
      <ProductCreateForm
        width="100%"
        padding="2rem"
        border="1px solid black"
        borderRadius="1 rem"
        onSuccess={() => router.push("/")}
      />
    </Flex>
  );
}
