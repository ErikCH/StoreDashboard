import type { NextApiRequest, NextApiResponse } from "next";
import { Amplify, withSSRContext, APIClass } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import awsExports from "@/aws-exports";
import * as mutations from "@/graphql/mutations";
import { DeleteProductInput } from "@/API";

Amplify.configure({
  ...awsExports,
  ssr: true,
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { Auth, API } = withSSRContext({ req });
  if (req.method === "DELETE") {
    const { id } = JSON.parse(req.body);
    try {
      const {
        signInUserSession: {
          accessToken: { payload },
        },
      } = await Auth.currentAuthenticatedUser();
      if (payload["cognito:groups"]?.includes("admin")) {
        // delete users
        await (API as APIClass).graphql<GraphQLQuery<DeleteProductInput>>({
          query: mutations.deleteProduct,
          variables: { input: { id } },
        });
        res.status(200).json({ success: true, message: "success" });
      } else {
        // Not in admin group send back authorization failed
        res
          .status(401)
          .json({ success: false, message: "Authorization failed" });
      }
    } catch (e) {
      // Not logged in
      console.log("error", e);
      res
        .status(401)
        .json({ success: false, message: "Authentication failed" });
    }
  } else {
    // Not DELETE method
    res.status(401).json({ success: false, message: "Authentication failed" });
  }
}
