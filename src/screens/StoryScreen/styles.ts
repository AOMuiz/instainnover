import { StyleSheet } from "react-native";
import { hp } from "../../utils/dimension";

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  userName: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  postedTime: {
    marginLeft: 10,
    fontWeight: "700",
    color: "#808080",
    fontSize: hp(14),
  },
  bottomContainer: {
    flexDirection: "row",
    marginBottom: hp(20),
    marginHorizontal: hp(10),
  },
  cameraButton: {
    width: hp(50),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: hp(50),
  },
  messageButton: {
    width: hp(50),
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: "100%",
    color: "white",
    fontSize: 16,
  },
  textInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: hp(50),
    height: hp(50),
  },
});

export default styles;
