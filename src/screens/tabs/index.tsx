import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './Home';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Wishlist from './Wishlist';
import Store from './Store';
import Profile from './Profile';
import Search from './Search';
import { HeaderBackButton } from '@react-navigation/elements';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: 'white' }}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
                            <Image style={styles.icon} source={require('../../assets/icons/home.png')} />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (focused ? null : <Text>Home</Text>),
                }}
            />
            <Tab.Screen
                name="Wishlist"
                component={Wishlist}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
                            <Image style={styles.icon} source={require('../../assets/icons/wishlist.png')} />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (focused ? null : <Text>Wishlist</Text>),
                }}
            />
            <Tab.Screen
                name="Store"
                component={Store}
                options={({ navigation }) => ({
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
                            <Image style={styles.icon} source={require('../../assets/icons/store.png')} />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (focused ? null : <Text>Store</Text>),
                    headerShown: true,
                    headerTransparent: true,
                    headerTitleStyle: {
                        color: '#000',
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                source={require('../../assets/icons/arrow.png')}
                                style={{ width: 9, height: 13, marginLeft: 15, tintColor: '#000' }}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginRight: 15 }}>
                            <Image resizeMode='contain' style={{ width: 22, height: 22 }} source={require('../../assets/icons/store.png')} />
                            <Image style={{ width: 19.32, height: 23.21 }} source={require('../../assets/icons/notification.png')} />
                        </View>
                    )
                })}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
                            <Image style={styles.icon} source={require('../../assets/icons/search.png')} />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (focused ? null : <Text>Search</Text>),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={({ navigation }) => ({
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
                            <Image style={styles.icon} source={require('../../assets/icons/profile.png')} />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (focused ? null : <Text>Profile</Text>),
                    headerShown: true,
                    headerTransparent: true,
                    headerTitleStyle: {
                        color: '#fff',
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                source={require('../../assets/icons/arrow.png')}
                                style={{ width: 9, height: 13, marginLeft: 15 }}
                            />
                        </TouchableOpacity>
                    ),
                })}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 61.73,
        height: 61.73,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainerFocused: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    icon: {
        width: 27.51,
        height: 27.51,
        tintColor: '#5D1B03',
    },
});