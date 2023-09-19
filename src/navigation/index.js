import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeDetailScreenScreen from "../screens/RecipeDetailScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{
          animation:'slide_from_right',
          presentation: 'card',
        }}>
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
          <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen}/>
          <Stack.Screen name="RecipeDetail" options={{headerShown: false}} component={RecipeDetailScreenScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }