import React from "react";
import { FlatList } from "react-native";
import Story from "../UserStoryPreview";

import styles from "./styles";
import stories from "../../data/stories";

const Stories = () => {
  //   const [stories, setStories] = useState([]);

  return (
    <FlatList
      data={stories}
      keyExtractor={({ user: { id } }) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({ item }) => <Story story={item} />}
    />
  );
};

export default Stories;
