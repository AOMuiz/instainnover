import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import ProfilePicture from "../ProfilePicture";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

const Story = (props) => {
  const {
    story: {
      user: { id, imageUri, name },
    },
  } = props;

  const navigation =
    useNavigation<BottomTabScreenProps<TabNavigatorParamList>>();

  const onPress = () => {
    navigation.navigate("Reels");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
