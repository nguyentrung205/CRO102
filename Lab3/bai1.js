import React, { useRef } from "react";
import { View, Button, Animated, Easing, StyleSheet } from "react-native"; // ✅ Thêm Easing

const MoveAnimationScreen = () => {
  const positionY = useRef(new Animated.Value(100)).current;

  const moveBox = () => {
    const randomY = Math.floor(Math.random() * 400) + 100; // Random vị trí Y mới

    Animated.timing(positionY, {
      toValue: randomY,
      duration: 600,
      easing: Easing.inOut(Easing.ease), // ✅ Sử dụng đúng cú pháp
      useNativeDriver: false, 
    }).start();
  };

  return (
    <View style={styles.container}>
      <Button title="MOVE" onPress={moveBox} />
      <Animated.View style={[styles.box, { top: positionY }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    position: "absolute",
  },
});

export default MoveAnimationScreen;
