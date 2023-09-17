import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-gesture-handler';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";


// const Stack = createNativeStackNavigator();
const MainStack = createStackNavigator();

export default function AppNavigation() {
    return (
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        </Stack.Navigator> */}
        <MainStack.Navigator initialRouteName="Welcome" screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
          <MainStack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
          <MainStack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen}/>
        </MainStack.Navigator>
      </NavigationContainer>
    );
  }