import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import { Amplify, API, Auth, graphqlOperation } from "aws-amplify";
import awsconfig from "./src/aws-exports";

import { withAuthenticator } from "@aws-amplify/ui-react-native";
import { useEffect } from "react";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";
import RootNavigation from "./src/navigation";

Amplify.configure(awsconfig);

function App() {
  useEffect(() => {
    const fetchUser = async () => {
      const authenticatedUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      if (!authenticatedUser) return;

      const getUserFromDB = await API.graphql<any>(
        graphqlOperation(getUser, { id: authenticatedUser.attributes.sub })
      );

      // User already exists
      if (getUserFromDB.data.getUser) return;

      const newUser = {
        id: authenticatedUser.attributes.sub,
        name: authenticatedUser.username,
        email: authenticatedUser.attributes.email,
        handle: authenticatedUser.username,
      };

      await API.graphql(graphqlOperation(createUser, { input: newUser }));
    };

    fetchUser();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <RootNavigation />
    </SafeAreaView>
  );
}

export default withAuthenticator(App);
