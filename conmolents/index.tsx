import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// Header Component (Chỉnh sửa lại cho JavaScript thuần)
const Header = ({ renderLeft, renderCenter, renderRight }) => {
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.side}>{renderLeft && renderLeft()}</View>
      <View style={headerStyles.center}>{renderCenter && renderCenter()}</View>
      <View style={headerStyles.side}>{renderRight && renderRight()}</View>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee',
    width: '100%',
  },
  side: { flex: 1, alignItems: 'center' },
  center: { flex: 3, alignItems: 'center', backgroundColor: 'yellow' },
});

// HomeScreen Component
const BaiOne = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header
          renderLeft={() => <Text>Header</Text>}
          renderCenter={() => <Text>Center 1</Text>}
          renderRight={() => <Text>Right 1</Text>}
        />
        <Header
          renderLeft={() => <Text>Trang Chu</Text>}
          renderCenter={() => <Text>Center 2</Text>}
          renderRight={() => <Text>Right 2</Text>}
        />
        <Header
          renderLeft={() => <Text></Text>}
          renderCenter={() => <Text>Center 3</Text>}
          renderRight={() => <Text>Right 3</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
});

export default BaiOne;
