import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils/dimension";

const styles = StyleSheet.create({
  container: {
    margin: hp(7),
    borderRadius: hp(40),
    borderWidth: hp(3),
    borderColor: "#ae22e0",
  },
  image: {
    borderRadius: hp(40),
    borderWidth: 1,
    borderColor: "#ffffff",
  },
});

export default styles;
