import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { FontAwesome, Ionicons, AntDesign, Fontisto } from "@expo/vector-icons";

import styles from "./styles";
import { CommnetHome } from "../../../icons/commentIcon";

const Footer = ({ likesCount: likesCountProp, caption, postedAt, comment }) => {
  const [isLiked, setIsLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const onLikePressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);

    setIsLike(!isLiked);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ? (
              <AntDesign name="heart" size={25} color={"#e73838"} />
            ) : (
              <AntDesign name="hearto" size={25} color={"white"} />
            )}
          </TouchableWithoutFeedback>
          <CommnetHome />
          <Ionicons name="paper-plane-outline" size={25} color={"white"} />
        </View>
        <FontAwesome name="bookmark-o" size={25} color={"white"} />
      </View>

      <Text style={styles.likes}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      {/* <Text style={styles.postedAt}>{new Date(postedAt).toLocaleString()}</Text> */}
      <View style={styles.comment}>
        <Text style={styles.commentUser}>{comment?.user}</Text>
        <Text style={styles.commentText} numberOfLines={2}>
          {comment?.comment}
        </Text>
      </View>
      <Text style={{ color: "#6E6E6E", margin: 3 }}>More</Text>
    </View>
  );
};

export default Footer;
