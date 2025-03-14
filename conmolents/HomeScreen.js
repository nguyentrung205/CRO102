import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import SectionView from './SectionView'; // Import SectionView đã tạo

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Phần Lịch trình */}
      <SectionView title="Lịch trình">
        <View style={styles.card}>
          <Text style={styles.label}>Địa điểm</Text>
          <Text style={styles.boldText}>Hồ Tràm, Vũng Tàu</Text>

          <Text style={styles.label}>Thời gian</Text>
          <Text>09:00 AM - 12:00 AM, 12/12/2024</Text>

          <Text style={styles.label}>Phương tiện di chuyển</Text>
          <Text>Xe bus</Text>

          <Text style={styles.label}>Thời gian</Text>
          <Text>21:00 - 22:00</Text>

          <Text style={styles.label}>Hình ảnh</Text>
          <Image source={require('../assets/VungTau.jpg')} style={styles.image} />

        </View>
      </SectionView>

      {/* Phần Khách sạn */}
      <SectionView title="Khách sạn">
        <View style={styles.card}>
          <Text style={styles.label}>Tên khách sạn</Text>
          <Text style={styles.boldText}>Hồng Quỳnh</Text>

          <Text style={styles.label}>Giờ mở cửa</Text>
          <Text>06:00 AM - 12:00 AM</Text>

          <Text style={styles.label}>Địa điểm</Text>
          <Text>234 Quang Trung, Hồ Chí Minh</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CHI TIẾT</Text>
          </TouchableOpacity>
        </View>
      </SectionView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#2F80ED',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
