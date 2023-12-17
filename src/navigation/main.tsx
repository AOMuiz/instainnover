import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./profile";
import HomeStack from "./Home";
import Search from "./Search";
import Reels from "./Reels";
import UploadReel from "./UploadReel";
import HomeIcon from "../components/icons/home";
import SearchIcon from "../components/icons/search";
import ReelsIcon from "../components/icons/reels";
import AddIcon from "../components/icons/add";
import { Image, View } from "react-native";

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "black" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
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
                height: 25,
                width: 25,
                borderRadius: 10000,
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{
                  uri: "https://images.unsplash.com/photo-1699519337091-8499c51d9186?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Main;
