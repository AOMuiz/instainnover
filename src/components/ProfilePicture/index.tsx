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
        uri,
      }}
      style={[styles.image, { width: hp(size), height: hp(size) }]}
    />
  </View>
);

export default ProfilePicture;
