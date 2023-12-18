import { StyleSheet } from "react-native";
import React from "react";
import SearchScreen from "../screens/SearchScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Search = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default Search;

const styles = StyleSheet.create({});
