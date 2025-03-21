import React, { useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Animated,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

const HEADER_MAX_HEIGHT = 200; // Chiều cao tối đa của header
const HEADER_MIN_HEIGHT = 70;  // Chiều cao tối thiểu khi cuộn lên
const { width } = Dimensions.get("window");

const data = Array.from({ length: 15 }, (_, i) => ({
  id: i.toString(),
  title: `Quiz ${i + 1}`,
}));

const ScrollHeaderScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  // Tạo animation cho chiều cao của header
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  // Tạo animation cho opacity của ảnh avatar
  const avatarOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      {/* Header với animation */}
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Animated.Image
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsIHJLpYA58E2QmkzTv6bza-33N3sxr8wPg&s" }}
          style={[styles.avatar, { opacity: avatarOpacity }]}
        />
        <Animated.Text style={[styles.headerText, { opacity: avatarOpacity }]}>
          Mornin' Mark! Ready for a quiz?
        </Animated.Text>
      </Animated.View>

      {/* Danh sách nội dung */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#2E7D32",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
    zIndex: 1000,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 10,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  item: {
    width: width * 0.9,
    padding: 20,
    backgroundColor: "#FFF",
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ScrollHeaderScreen;
