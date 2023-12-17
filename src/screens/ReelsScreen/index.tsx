import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { hp } from "../../utils/dimension";
import {
  Feather,
  Entypo,
  AntDesign,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import ProfilePicture from "../../components/ProfilePicture";
import { CommentReel } from "../../components/icons/commentIcon";

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
              <View
                style={{
                  backgroundColor: "black",
                  right: -12,
                  top: 2.77,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: hp(15),
                  height: hp(20),
                  width: hp(20),
                }}
              >
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

const styles = StyleSheet.create({
  container: { height: "100%", flex: 1 },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: hp(25),
    paddingHorizontal: hp(20),
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(10),
  },
  userName: {
    color: "white",
    fontWeight: "700",
    fontSize: hp(12),
  },
  follow: {
    color: "white",
    padding: hp(7),
    fontSize: hp(12),
    borderRadius: 8,
    borderColor: "white",
    borderWidth: 1,
  },
  caption: {
    color: "white",
  },
  music: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginTop: hp(15),
  },
  bottomContainer: {
    marginBottom: hp(20),
    marginHorizontal: hp(16),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  bottomLeft: { gap: 7 },
  bottomRight: { rowGap: 15, alignItems: "center" },
});
