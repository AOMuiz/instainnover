import { StyleSheet } from "react-native";
import { hp } from "../../utils/dimension";

export const styles = StyleSheet.create({
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
  leftMusic: {
    backgroundColor: "black",
    right: -12,
    top: 2.77,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: hp(15),
    height: hp(20),
    width: hp(20),
  },
});
