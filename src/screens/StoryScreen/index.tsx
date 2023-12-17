import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles";
import ProfilePicture from "../../components/ProfilePicture";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";

const user = {
  user: {
    id: "1",
    imageUri:
      "https://images.unsplash.com/photo-1699519337091-8499c51d9186?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John",
  },
  stories: [
    {
      imageUri:
        "https://images.unsplash.com/photo-1682687220801-eef408f95d71?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      postedTime: "25m",
    },
    {
      imageUri:
        "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      postedTime: "30m",
    },
    {
      imageUri:
        "https://images.unsplash.com/photo-1702659610398-58d3fb3f65f2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
      postedTime: "12m",
    },
  ],
  comments: {
    count: 3,
    data: [
      {
        created_time: "1440698882",
        text: "@kashrafiq82 i dnt know what im not ready means.",
        from: {
          username: "el_capit4n",
          profile_picture:
            "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/11056014_930580873660876_1764685772_a.jpg",
          id: "1813181663",
          full_name: "Aidan Shah",
        },
        id: "1060981586725475242",
      },
      {
        created_time: "1440699089",
        text: "@chelphill someday this boat will be called lopster",
        from: {
          username: "a_grillz10",
          profile_picture:
            "https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/10864973_677675199015449_1525007523_a.jpg",
          id: "55897168",
          full_name: "Adam Grillo",
        },
        id: "1060983319694446650",
      },
      {
        created_time: "1440699117",
        text: "Omg you're so creative I luh dat name. @a_grillz10",
        from: {
          username: "chelphill",
          profile_picture:
            "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/10249235_681947635271742_1429097030_a.jpg",
          id: "176724813",
          full_name: "Chelsea Phillips",
        },
        id: "1060983558862049358",
      },
    ],
  },
};

const StoryScreen = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const storyDuration = 4000; // 4 seconds for each story

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentStoryIndex < user.stories.length - 1) {
        setCurrentStoryIndex((prevIndex) => prevIndex + 1);
      } else {
        // End of stories, reset to the beginning
        setCurrentStoryIndex(0);
      }
    }, storyDuration);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (100 / storyDuration) * 1000; // Update every second
        if (newProgress >= 100) {
          clearInterval(progressInterval);
        }
        return newProgress;
      });
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(interval);
    };
  }, [currentStoryIndex, user.stories.length]);

  const handleNextStory = () => {
    if (currentStoryIndex >= user.stories.length - 1) {
      return;
    }
    setCurrentStoryIndex((prevIndex) => prevIndex - 1);
    setProgress(0); // Reset progress on story change
  };

  const handlePrevStory = () => {
    if (currentStoryIndex <= 0) {
      return;
    }
    setCurrentStoryIndex((prevIndex) => prevIndex - 1);
    setProgress(0); // Reset progress on story change
  };

  const handleStoryPress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get("window").width;

    // if (x < screenWidth / 2) {
    //   handlePrevStory();
    // } else {
    //   handleNextStory();
    // }
    if (currentStoryIndex < user.stories.length - 1) {
      setCurrentStoryIndex((prevIndex) => prevIndex + 1);
      setProgress(0); // Reset progress on story change
    } else {
      setCurrentStoryIndex(0);
      setProgress(0); // Reset progress on story change
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={{ position: "relative", width: "100%", height: "100%" }}>
        <TouchableOpacity onPress={handleStoryPress}>
          <Image
            source={{ uri: user.stories[currentStoryIndex].imageUri }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.userInfo}>
            <ProfilePicture uri={user.user.imageUri} size={50} />
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Text style={styles.userName}>{user.user.name}</Text>
              <Text style={styles.postedTime}>
                {user.stories[currentStoryIndex].postedTime}
              </Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color={"#ffffff"} />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Send message"
                placeholderTextColor={"white"}
              />
            </View>
            <View style={styles.messageButton}>
              <Ionicons
                name="paper-plane-outline"
                size={35}
                color={"#ffffff"}
              />
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: `${progress}%`,
              height: 5,
              backgroundColor: "red",
            }}
          />
        </View>
      </View> */}
      <TouchableWithoutFeedback onPress={handleStoryPress}>
        <ImageBackground
          source={{ uri: user.stories[currentStoryIndex].imageUri }}
          style={styles.image}
        >
          <View style={styles.userInfo}>
            <ProfilePicture uri={user.user.imageUri} size={50} />
            <Text style={styles.userName}>{user.user.name}</Text>
            <Text style={styles.postedTime}>
              {user.stories[currentStoryIndex].postedTime}
            </Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color={"#ffffff"} />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Send message"
                placeholderTextColor={"white"}
              />
            </View>
            <View style={styles.messageButton}>
              <Ionicons
                name="paper-plane-outline"
                size={35}
                color={"#ffffff"}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
