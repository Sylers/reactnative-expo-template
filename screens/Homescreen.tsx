import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Homescreen = ({ navigation, route }: { [key: string]: any }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Roboto_700Bold" }} className="bg-red-500">
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter_800ExtraBold",
  },
});
