import { StyleSheet } from "react-native";
import { hp } from "../../utils/dimension";

export const styles = StyleSheet.create({
  container: { backgroundColor: "black", flex: 1, marginTop: 10 },
  searchBarContainer: {
    position: "relative",
    height: hp(40),
    width: "70%",
    alignSelf: "center",
    backgroundColor: "#262626",
    borderRadius: 6,
    justifyContent: "center",
    padding: 10,
  },
});
