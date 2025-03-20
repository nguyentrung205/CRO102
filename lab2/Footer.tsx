import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface FooterProps {
  lastUpdated: string;
  backgroundColor: string;
}

const Footer = React.memo(({ lastUpdated, backgroundColor }: FooterProps) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>
        Thời gian bạn cập nhật thông tin: {lastUpdated}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: { width: "100%", padding: 10, alignItems: "center" },
  text: { color: "white", fontSize: 14 },
});

export default Footer;
