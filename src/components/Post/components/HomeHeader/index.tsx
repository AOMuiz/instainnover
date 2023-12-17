import { View } from "react-native";
import React from "react";

import { styles } from "./style";
import AddIcon from "../../../icons/add";
import Instagram from "../../../icons/instaIcon";
import Messangericon from "../../../icons/messanger";
import HeartIcon from "../../../icons/heart";

const Header = () => {
  return (
    <View style={styles.container}>
      <Instagram />
      <View style={styles.icons}>
        <HeartIcon />
        <AddIcon />
        <Messangericon />
      </View>
    </View>
  );
};

export default Header;