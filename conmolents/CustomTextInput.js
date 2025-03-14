import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Thư viện icon

const CustomTextInput = ({ label, placeholder, error, isFocused }) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.label}>
        {label} <Text style={{ color: "red" }}>*</Text>
      </Text>

      {/* Ô nhập liệu */}
      <View
        style={[
          styles.inputContainer,
          focused && !error ? styles.focusedInput : null,
          error ? styles.errorInput : null,
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#aaa"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {error && <Icon name="error" size={20} color="red" />}
      </View>

      {/* Hiển thị lỗi */}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  focusedInput: {
    borderColor: "#007AFF",
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },
});

export default CustomTextInput;
