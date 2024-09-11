import { View, Text, ImageBackground, Pressable } from "react-native";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { router, useLocalSearchParams } from "expo-router";

import AppGradient from "@/components/AppGradient";

import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";

const Meditate = () => {
  const { id } = useLocalSearchParams();

  const [secondsRemaining, setSecondsRemaining] = useState(10);

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>

          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-4xl text-blue-800">
                00:{secondsRemaining}
              </Text>
            </View>
          </View>
          <View className="mb-5">
            <CustomButton title="Start Meditation" onPress={() => {}} />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
