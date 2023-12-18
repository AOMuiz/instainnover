import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  leftIcons: {
    flexDirection: "row",
    width: 120,
    justifyContent: "space-between",
  },
  likes: {
    fontWeight: "bold",
    margin: 3,
    color: "white",
  },
  caption: {
    margin: 3,
    color: "white",
  },
  postedAt: {
    color: "#8c8c8c",
    margin: 3,
  },
  comment: {
    flexDirection: "row",
    gap: 4,
    margin: 3,
  },
  commentUser: {
    fontWeight: "500",
    color: "white",
  },
  commentText: {
    color: "white",
  },
});

export default styles;
