import { StyleSheet } from "react-native";
import { hp } from "../../../../utils/dimension";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: hp(10),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: { flexDirection: "row", alignItems: "center", gap: 2 },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: hp(24),
  },
});
