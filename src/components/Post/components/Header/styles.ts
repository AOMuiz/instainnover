import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7,
  },
  left: {
    flexDirection: "row",
  },
  right: {
    marginRight: 15,
  },
  name: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
});

export default styles;
