import { useRouter } from "next/router";
import { Flex, Heading } from "@aws-amplify/ui-react";
import PlatformCreateForm from "@/ui-components/PlatformCreateForm";

export default function NewPlatform() {
  const router = useRouter();
  return (
    <>
      <Heading level={1}>Create New Platform</Heading>
      <Flex justifyContent="center">
        <PlatformCreateForm
          width="340px"
          border="1px solid black"
          borderRadius="1 rem"
          onSuccess={() => router.push("/platforms")}
        />
      </Flex>
    </>
  );
}
