import { View } from "react-native";
import React from "react";

import { styles } from "./style";
import AddIcon from "../../../icons/add";
import Instagram from "../../../icons/instaIcon";
import Messangericon from "../../../icons/messanger";
import HeartIcon from "../../../icons/heart";
import { Entypo, AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Instagram />
        <Entypo name="chevron-small-down" size={24} color="white" />
      </View>

      <View style={styles.icons}>
        <AntDesign name="hearto" size={25} color={"white"} />
        <AddIcon />
        <Messangericon />
      </View>
    </View>
  );
};

export default Header;
