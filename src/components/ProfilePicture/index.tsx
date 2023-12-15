import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
import { hp } from "../../utils/dimension";

const ProfilePicture = ({ uri, size = 70 }) => (
  <View
    style={[
      styles.container,
      { width: hp(size) + hp(6), height: hp(size) + hp(6) },
    ]}
  >
    <Image
      source={{
        uri: "https://images.unsplash.com/photo-1699519337091-8499c51d9186?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      style={[styles.image, { width: hp(size), height: hp(size) }]}
    />
  </View>
);

export default ProfilePicture;
