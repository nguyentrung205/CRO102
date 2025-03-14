import React from "react";
import { View, StyleSheet } from "react-native";
import CustomTextInput from "./CustomTextInput";

const Bai3 = () => {
  return (
    <View style={styles.container}>
      {/* Trạng thái bình thường */}
      <CustomTextInput label="Title" placeholder="Place holder" />

      {/* Trạng thái focus */}
      <CustomTextInput label="Title" placeholder="Place holder" isFocused />

      {/* Trạng thái lỗi */}
      <CustomTextInput label="Title" placeholder="Place holder" error="Error Description" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default Bai3;
