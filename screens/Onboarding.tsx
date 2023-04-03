import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useRef } from "react";

const items = [
  {
    id: 1,
    image: "",
    title: "First",
    subTitle: "",
  },
  {
    id: 2,
    image: "",
    title: "Second",
    subTitle: "",
  },
  {
    id: 3,
    image: "",
    title: "Third",
    subTitle: "",
  },
];

const { width } = Dimensions.get("window");

const Slides = ({ screen }) => (
  <View className="" style={{ width }}>
    <Text className="flex-1 bg-slate-500 text-white">{screen.title}</Text>
  </View>
);

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const ref = useRef(null);

  return (
    <SafeAreaView className="flex-1 bg-red-600">
      <FlatList
        data={items}
        renderItem={({ item }) => <Slides screen={item} />}
        keyExtractor={(screen: any) => screen?.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
        ref={ref}
        horizontal
        onMomentumScrollEnd={(e) => {
          const contentOffsetX = e.nativeEvent.contentOffset.x;
          const cIndex = Math.round(contentOffsetX / width);
          setCurrentIndex(cIndex);
        }}
        pagingEnabled
      />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
