import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { Home } from "./src/screens";

import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);
//Amplify combine different services which AWS has to offer

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Home />
    </SafeAreaView>
  );
}
