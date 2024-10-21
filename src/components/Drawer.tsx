import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Link } from '@react-navigation/native';
import { Path } from 'react-native-svg';


const items = [
    { icon: require('../assets/icons/home.png'), text: 'Home', Path: '/Home' },
    { icon: require('../assets/icons/store.png'), text: 'Store', Path: '/Store' },
    { icon: require('../assets/icons/profile1.png'), text: 'Profile', Path: '/Profile' },
];



const DrawerContent = (props: any) => {
    return (
        <DrawerContentScrollView {...props}
        >
            <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 44, height: 44 }} source={require('../assets/images/user.png')} />
                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                    <Text style={styles.text}>Hello, Good Morning</Text>
                    <Text style={styles.heading}>Name Here!</Text>
                </View>
            </View>
            {items.map((item, index) => (
                <Link to={item.Path} key={index}>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ marginRight: 10, tintColor: '#1D1E20', width: 23, height: 23 }} source={item.icon} />
                        <Text style={{ fontSize: 17, fontWeight: '400', color: '#000' }}>{item.text}</Text>
                    </View>
                </Link >
            ))}
        </DrawerContentScrollView>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
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
})