import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Inter_800ExtraBold } from "@expo-google-fonts/inter";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./screens/Homescreen";
// import Constants from "expo-constants";

const Stack = createNativeStackNavigator();

function cacheImages(images: any) {
  return images.map((image: any) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts: any) {
  return fonts.map((font: any) => Font.loadAsync(font));
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  useEffect(() => {
    const prepare = async () => {
      try {
        SplashScreen.preventAutoHideAsync();

        const imageAssets = cacheImages([
          "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
          // require("./assets/images/circle.jpg"),
        ]);

        const fontAssets = cacheFonts([
          { Roboto_700Bold, Inter_800ExtraBold },
          Ionicons.font,
        ]);

        await Promise.all([...imageAssets, ...fontAssets]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    };
    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  // console.log(Constants.expoConfig?.extra?.fact);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          // headerStyle: {
          //   backgroundColor: "#f4511e",
          // },
          // headerTintColor: "#fff",
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{
            title: "Welcome",
            // headerRight: () => (
            //   <Button
            //     onPress={() => alert("This is a button!")}
            //     title="Info"
            //     color="#fff"
            //   />
            // ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
