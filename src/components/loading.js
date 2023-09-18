import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loading(props) {
  return (
    <View className="flex-1 flex justify-center items-center">
      <ActivityIndicator color="#1893F8" animating={true} {...props}/>
    </View>
  )
}