import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabHome() {
  return (
    <SafeAreaView className="flex-1">
        <View className="flex-1 justify-items-start pt-4 bg-red-400">
        <Text className="text-6xl font-bold mt-4 text-center text-[#427ef5] animate-bounce">Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}
