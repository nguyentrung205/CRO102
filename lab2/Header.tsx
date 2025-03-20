import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface HeaderProps {
  name: string;
  avatar: string | null;
}

const Header = React.memo(({ name, avatar }: HeaderProps) => {
  return (
    <View style={styles.container}>
      {avatar ? (
        <Image source={{ uri: avatar }} style={styles.avatar} />
      ) : (
        <Text style={styles.avatarPlaceholder}>👤</Text>
      )}
      <Text style={styles.greeting}>Chào ngày mới</Text>
      <Text style={styles.name}>{name || "Chưa có tên"}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: { alignItems: "center", marginBottom: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginBottom: 5 },
  avatarPlaceholder: { fontSize: 50 },
  greeting: { fontSize: 16, fontWeight: "bold" },
  name: { fontSize: 18, color: "black" },
});

export default Header;
