import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

type DrawerNavProp = DrawerNavigationProp<any>;

const Header = () => {
  const navigation = useNavigation<DrawerNavProp>();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image style={{ width: 20, height: 16 }} source={require('../assets/icons/menu.png')} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{ width: 44, height: 44 }} source={require('../assets/images/user.png')} />
          <View style={{ marginLeft: 10, justifyContent: 'center' }}>
            <Text style={styles.text}>Hello, Good Morning</Text>
            <Text style={styles.heading}>Name Here!</Text>
          </View>
        </View>
      </View>
      <Image style={{ width: 19, height: 23 }} source={require('../assets/icons/notification.png')} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
    fontSize: 10,
    fontWeight: '500',
    color: '#000',
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
});