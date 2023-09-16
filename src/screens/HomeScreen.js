import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { MapPinIcon } from "react-native-heroicons/solid";

export default function HomeScreen() {
  return (
    <View>
      <Text className="text-red-500">HomeScreen</Text>
      <MapPinIcon color="black"/>
      <StatusBar/>
    </View>
  )
}