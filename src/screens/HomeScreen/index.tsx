import { FlatList, StyleSheet } from "react-native";
import React from "react";
import Stories from "../../components/UserStoriesPreview";
import Post from "../../components/Post";
import { SafeAreaView } from "react-native-safe-area-context";
import posts from "../../data/posts";
import HomeHeader from "../../components/Post/components/HomeHeader";

const Home = () => {
  return (
    <SafeAreaView style={styles.containner}>
      <HomeHeader />
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        ListHeaderComponent={Stories}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  containner: { backgroundColor: "black", flex: 1 },
});
