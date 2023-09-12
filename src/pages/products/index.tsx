import { View } from "@aws-amplify/ui-react";
import ProductCreateForm from "@/ui-components/ProductCreateForm";
import { useRouter } from "next/router";

export default function Platform() {
  const router = useRouter();
  return (
    <View width="500px" margin="0 auto">
      <ProductCreateForm onSuccess={() => router.push("/")} />
    </View>
  );
}
