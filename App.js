const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone14Pro2 from "./screens/IPhone14Pro2";
import IPhone14Pro1 from "./screens/IPhone14Pro1";
import IPhone14Pro14 from "./screens/IPhone14Pro14";
import IPhone14Pro13 from "./screens/IPhone14Pro13";
import IPhone14Pro6 from "./screens/IPhone14Pro6";
import IPhone14Pro15 from "./screens/IPhone14Pro15";
import IPhone14Pro7 from "./screens/IPhone14Pro7";
import IPhone14Pro5 from "./screens/IPhone14Pro5";
import FrameScreen from "./screens/FrameScreen";
import IPhone14Pro4 from "./screens/IPhone14Pro4";
import IPhone14Pro10 from "./screens/IPhone14Pro10";
import IPhone14Pro9 from "./screens/IPhone14Pro9";
import FlashOn from "./screens/FlashOn";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Inter: require("./assets/fonts/Inter.ttf"),
    Inter_thin: require("./assets/fonts/Inter_thin.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    "DM Sans": require("./assets/fonts/DM_Sans.ttf"),
    "DM Sans_regular": require("./assets/fonts/DM_Sans_regular.ttf"),
    "DM Sans_medium": require("./assets/fonts/DM_Sans_medium.ttf"),
    "DM Sans_bold": require("./assets/fonts/DM_Sans_bold.ttf"),
    Georama: require("./assets/fonts/Georama.ttf"),
    Georama_extrabold: require("./assets/fonts/Georama_extrabold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 5000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone14Pro2"
              component={IPhone14Pro2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro1"
              component={IPhone14Pro1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro14"
              component={IPhone14Pro14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro13"
              component={IPhone14Pro13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro6"
              component={IPhone14Pro6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro15"
              component={IPhone14Pro15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro7"
              component={IPhone14Pro7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro5"
              component={IPhone14Pro5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame75"
              component={FrameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro4"
              component={IPhone14Pro4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro10"
              component={IPhone14Pro10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14Pro9"
              component={IPhone14Pro9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FlashOn"
              component={FlashOn}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <IPhone14Pro1 />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
