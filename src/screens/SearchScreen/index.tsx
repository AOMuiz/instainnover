import { Image, TextInput, View } from "react-native";
import React from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import { hp } from "../../utils/dimension";
import { MasonryFlashList } from "@shopify/flash-list";
import VideoSearchIcon from "../../components/icons/videoSearch";
import ImageSearchIcon from "../../components/icons/imageSearch";
import { exploreData } from "../../data/explore";

const SearchScreen = () => {
  const columnCount = 3;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <EvilIcons
          name="search"
          size={24}
          color="#969696"
          style={{ position: "absolute", paddingLeft: 5 }}
        />
        <TextInput
          style={{
            height: "100%",
            paddingLeft: hp(30),
          }}
          placeholder="Search"
        />
      </View>
      <View style={{ flex: 1, marginTop: 10 }}>
        <MasonryFlashList
          contentContainerStyle={{ padding: 2 }}
          data={exploreData}
          numColumns={columnCount}
          renderItem={({ item, index }) => (
            <View
              style={{
                height:
                  ((index * 20) % 100) + 100 / ((index % columnCount) + 1),
                aspectRatio: 16 / 9,
                position: "relative",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  zIndex: 2,
                }}
              >
                {item.type === "video" ? (
                  <VideoSearchIcon />
                ) : (
                  <ImageSearchIcon />
                )}
              </View>
              <Image
                source={{ uri: item.uri }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
          )}
          estimatedItemSize={200}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
