import { Flex, Heading, View } from "@aws-amplify/ui-react";
import ProductCreateForm from "@/ui-components/ProductCreateForm";
import { useRouter } from "next/router";

export default function Platform() {
  const router = useRouter();
  return (
    <Flex alignItems={"center"} justifyContent="center" direction={"column"}>
      <Heading level={1}>Create New Product</Heading>
      <ProductCreateForm
        width="800px"
        border="1px solid black"
        borderRadius={"1 rem"}
        onSuccess={() => router.push("/")}
      />
    </Flex>
  );
}
