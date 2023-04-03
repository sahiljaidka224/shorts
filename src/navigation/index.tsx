import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { BottomTabNavigator } from "./bottom-tab";
const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Stack" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
