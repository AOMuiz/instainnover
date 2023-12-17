import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Main from "./src/navigation/main";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <Main />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
