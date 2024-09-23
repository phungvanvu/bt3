import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const notifications = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    message: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    date: '20/08/2020, 06:00',
    icon: 'check-circle',
    iconColor: '#4A90E2',
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    message: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    date: '20/08/2020, 06:00',
    icon: 'group',
    iconColor: '#4A90E2',
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    message: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    date: '20/08/2020, 06:00',
    icon: 'group',
    iconColor: '#4A90E2',
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    message: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng khác.',
    date: '20/08/2020, 06:00',
    icon: 'group',
    iconColor: '#4A90E2',
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    message: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    date: '20/08/2020, 06:00',
    icon: 'check-circle',
    iconColor: '#4A90E2',
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    message: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc ngay.',
    date: '20/08/2020, 06:00',
    icon: 'check-circle',
    iconColor: '#4A90E2',
  },
];

const NotificationItem = ({ title, message, date, icon, iconColor, onPress, isSelected }) => (
  <TouchableOpacity onPress={onPress} style={[styles.notificationItem, isSelected && styles.selectedItem]}>
    <Icon name={icon} size={25} color={iconColor} style={styles.icon} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  </TouchableOpacity>
);

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  const handlePress = (id) => {
    setSelectedId(id);
  };

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    return (
      <NotificationItem
        title={item.title}
        message={item.message}
        date={item.date}
        icon={item.icon}
        iconColor={item.iconColor}
        onPress={() => handlePress(item.id)}
        isSelected={isSelected}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 40,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  list: {
    paddingHorizontal: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 3,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  selectedItem: {
    backgroundColor: '#e0f7fa',
  },
  icon: {
    marginRight: 15,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  message: {
    fontSize: 14,
    color: '#555',
  },
  date: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
});
