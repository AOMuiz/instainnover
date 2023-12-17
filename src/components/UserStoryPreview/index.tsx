import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import styles from "./styles";
import ProfilePicture from "../ProfilePicture";

const Story = (props) => {
  const {
    story: {
      user: { id, imageUri, name },
    },
  } = props;

  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();

  const onPress = () => {
    navigation.navigate("StoryScreen", { user: props.story });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
