import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Main = () => {
  const [userInfo, setUserInfo] = useState({ name: "", avatar: "" });
  const [footerColor, setFooterColor] = useState("#333");
  const [lastUpdated, setLastUpdated] = useState("");

  // Hàm cập nhật thông tin - Chỉ re-render Header & Footer khi nhấn "CẬP NHẬT THÔNG TIN"
  const updateUserInfo = useCallback((name: string, avatar: string) => {
    setUserInfo({ name, avatar });

    // Cập nhật thời gian
    const now = new Date();
    const timeString = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    setLastUpdated(timeString);
  }, []);

  // Hàm đổi màu footer - Chỉ re-render Footer
  const updateFooterColor = useCallback(() => {
    setFooterColor(getRandomColor());
  }, []);

  return (
    <View style={styles.container}>
      <Header name={userInfo.name} avatar={userInfo.avatar} />
      <Body onUpdateInfo={updateUserInfo} onChangeFooterColor={updateFooterColor} />
      <Footer lastUpdated={lastUpdated} backgroundColor={footerColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "space-between", backgroundColor: "#fff" },
});

export default Main;
