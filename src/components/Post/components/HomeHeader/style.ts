import { StyleSheet } from "react-native";
import { hp } from "../../../../utils/dimension";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: hp(24),
  },
});
