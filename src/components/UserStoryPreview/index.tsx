import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

import styles from "./styles";
import ProfilePicture from "../ProfilePicture";

const Story = (props) => {
  const {
    story: {
      user: { id, imageUri, name },
    },
  } = props;

  const navigation = useNavigation<StackScreenProps<HomeStackParamList>>();

  const onPress = () => {
    navigation.navigate("StoryScreen");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
