import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Publish } from "../screens";

import { BottomTabNavigator } from "./bottom-tab";
const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Base" component={BottomTabNavigator} />
        <Stack.Screen
          name="Publish"
          component={Publish}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
