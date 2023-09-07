import { Button, Heading, View, useAuthenticator } from "@aws-amplify/ui-react";

export default function Home() {
  const { signOut } = useAuthenticator((context) => [context.signOut]);
  return (
    <View className="flex flex-col items-center">
      <Heading level={1}>Hello World</Heading>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}
