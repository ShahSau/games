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
    RobotoItalic: require("./assets/fonts/Roboto-Italic.ttf"),
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoThin: require("./assets/fonts/Roboto-Italic.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    Robotoegular: require("./assets/fonts/Roboto-Regular.ttf"),
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
