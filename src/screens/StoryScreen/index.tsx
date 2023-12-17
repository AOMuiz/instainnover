import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import ProfilePicture from "../../components/ProfilePicture";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { hp } from "../../utils/dimension";

const StoryScreen = ({ route, navigation }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const storyDuration = 4000; // 4 seconds for each story
  const { user } = route.params;
  const progressRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // If progress is complete, proceed to the next story
      if (currentStoryIndex < user.stories.length - 1) {
        setCurrentStoryIndex((prevIndex) => prevIndex + 1);
        setProgress(0); // Reset progress on story change
      } else {
        // End of stories, reset to the beginning
        setCurrentStoryIndex(0);
        setProgress(0);
        navigation.goBack();
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
      // clearInterval(progressRef.current);
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
    if (progress >= 100) {
      // If progress is complete, proceed to the next story
      if (currentStoryIndex < user.stories.length - 1) {
        setCurrentStoryIndex((prevIndex) => prevIndex + 1);
        setProgress(0); // Reset progress on story change
      } else {
        setCurrentStoryIndex(0);
        setProgress(0); // Reset progress on story change
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handleStoryPress}>
        <ImageBackground
          source={{ uri: user.stories[currentStoryIndex].imageUri }}
          style={styles.image}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
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
            <View
              style={{
                flexDirection: "row",
                gap: 15,
                alignItems: "center",
              }}
            >
              <Entypo name="dots-three-horizontal" size={16} color={"white"} />
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Text
                  style={{
                    fontSize: hp(30),
                    color: "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  x
                </Text>
              </TouchableWithoutFeedback>
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
        </ImageBackground>
      </TouchableWithoutFeedback>
      <View
        ref={progressRef}
        style={{
          width: `${progress}%`,
          height: 5,
          backgroundColor: "red",
        }}
      />
    </SafeAreaView>
  );
};

export default StoryScreen;
