import React from "react";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

import ProfilePicture from "../../../ProfilePicture";
import styles from "./styles";

const Header = ({ imageUri, name }) => (
  <View style={styles.container}>
    <View style={styles.left}>
      <ProfilePicture uri={imageUri} size={40} />
      <Text style={styles.name}>{name}</Text>
    </View>
    <View style={styles.right}>
      <Entypo name="dots-three-horizontal" size={16} color={"white"} />
    </View>
  </View>
);

export default Header;
