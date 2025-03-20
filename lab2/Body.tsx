import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

interface BodyProps {
  onUpdateInfo: (name: string, avatar: string) => void;
  onChangeFooterColor: () => void;
}

const Body = ({ onUpdateInfo, onChangeFooterColor }: BodyProps) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên mới"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dán địa chỉ avatar mới"
        value={avatar}
        onChangeText={setAvatar}
      />
      <Button title="CẬP NHẬT THÔNG TIN" onPress={() => onUpdateInfo(name, avatar)} />
      <Button title="ĐỔI MÀU FOOTER" onPress={onChangeFooterColor} color="#007BFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Body;
