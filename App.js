import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createStackNavigator();
const theme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: 'transparent'
  }

}


const App=()=> {
  const [loaded] = useFonts({
    Light: require("./assets/fonts/Roboto-Light.ttf"),
    Thin: require("./assets/fonts/Roboto-Italic.ttf"),
    Bold: require("./assets/fonts/Roboto-Bold.ttf"),
    Medium: require("./assets/fonts/Roboto-Medium.ttf"),
    Regular: require("./assets/fonts/Roboto-Regular.ttf"),
    SemiBold: require("./assets/fonts/Roboto-Condensed.ttf"),
  });

  if (!loaded) {
    return null;
  }
  
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
