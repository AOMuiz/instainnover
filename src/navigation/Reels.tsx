import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReelsScreen from "../screens/ReelsScreen";

const Stack = createStackNavigator<ReelsStackParamList>();

const Reels = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ReelsScreen" component={ReelsScreen} />
    </Stack.Navigator>
  );
};

export default Reels;
