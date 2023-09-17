import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <View className="flex-1 flex-col items-center justify-center">
      <Text className="text-4xl">HomeScreen</Text>
      <StatusBar style="dark"/>
    </View>
  )
}