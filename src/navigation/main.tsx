import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./profile";
import Home from "./Home";
import Search from "./Search";
import Reels from "./Reels";
import UploadReel from "./UploadReel";
import HomeIcon from "../components/icons/home";
import SearchIcon from "../components/icons/search";
import ReelsIcon from "../components/icons/reels";
import AddIcon from "../components/icons/add";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "black" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => <SearchIcon />,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({ focused }) => <ReelsIcon />,
        }}
      />
      <Tab.Screen
        name="UploadReel"
        component={UploadReel}
        options={{
          tabBarIcon: ({ focused }) => <AddIcon />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: "white",
                borderRadius: 10000,
              }}
            ></View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Main;
