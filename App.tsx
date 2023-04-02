import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Inter_800ExtraBold } from "@expo-google-fonts/inter";
import Ionicons from "@expo/vector-icons/Ionicons";

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

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Roboto_700Bold" }}>
        Open up App.tsx to start working on your app!
      </Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter_800ExtraBold",
  },
});
