import { Text, View, ImageBackground } from "react-native";
import React from "react";
import { hp } from "../../utils/dimension";
import { Feather, Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import ProfilePicture from "../../components/ProfilePicture";
import { CommentReel } from "../../components/icons/commentIcon";
import { styles } from "./styles";

const ReelsScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1702659610398-58d3fb3f65f2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
        }}
        style={styles.image}
      >
        <View style={styles.topContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
              Reels
            </Text>
            <Entypo name="chevron-small-down" size={24} color="white" />
          </View>

          <Feather name="camera" size={20} color={"white"} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomLeft}>
            <View style={styles.userInfo}>
              <ProfilePicture
                uri={
                  "https://images.unsplash.com/photo-1701453031904-dbec6ef40984?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8l"
                }
                size={40}
                marginLeft={0}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: hp(5),
                }}
              >
                <Text style={styles.userName}>zoroamy_edits</Text>
                <Text style={styles.follow}>Follow</Text>
              </View>
            </View>
            <Text style={styles.caption}>What a Failure 😭 ...</Text>
            <View style={styles.music}>
              <Feather name="music" size={16} color="white" />
              <Text style={styles.caption}>Music Playing</Text>
            </View>
          </View>
          <View style={styles.bottomRight}>
            <View style={{ alignItems: "center", rowGap: 7 }}>
              <AntDesign name="hearto" size={25} color={"white"} />
              <Text style={{ color: "white" }}>147 k</Text>
            </View>
            <View style={{ alignItems: "center", rowGap: 7 }}>
              <CommentReel />
              <Text style={{ color: "white" }}>2,465</Text>
            </View>
            <Ionicons name="paper-plane-outline" size={25} color={"white"} />
            <Entypo name="dots-three-horizontal" size={16} color={"white"} />
            <View
              style={{
                width: hp(28),
                height: hp(28),
                borderRadius: 4,
                backgroundColor: "white",
                position: "relative",
              }}
            >
              <View style={styles.leftMusic}>
                <Feather name="music" size={10} color="white" />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ReelsScreen;
