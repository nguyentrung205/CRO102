import React, { useRef, useState, useCallback } from "react";
import {
  View,
  FlatList,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const data = Array.from({ length: 20 }, (_, i) => ({ id: i.toString() })); // Tạo danh sách giả lập

const AnimatedItem = React.memo(({ isVisible }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Giá trị opacity ban đầu = 0
  const scaleAnim = useRef(new Animated.Value(0.8)).current; // Giá trị scale ban đầu = 0.8

  React.useEffect(() => {
    if (isVisible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isVisible]);

  return (
    <Animated.View
      style={[
        styles.item,
        { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
      ]}
    />
  );
});

const Move = () => {
  const [visibleItems, setVisibleItems] = useState({});

  // Xác định item nào đang hiển thị trên màn hình
  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    const newVisibleItems = {};
    viewableItems.forEach((item) => {
      newVisibleItems[item.item.id] = true;
    });
    setVisibleItems(newVisibleItems);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AnimatedItem isVisible={!!visibleItems[item.id]} />}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }} // Item cần hiển thị ít nhất 50% mới kích hoạt animation
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  item: {
    width: width * 0.8,
    height: 80,
    backgroundColor: "lightblue",
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default Move;
