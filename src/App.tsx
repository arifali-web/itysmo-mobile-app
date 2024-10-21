import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ProductDetails from './screens/ProductDetails';
import MyTabs from './screens/tabs';
import MyDrawer from './components/Drawer'; // This should be a drawer-based screen
import { Image, View } from 'react-native';
import Home from './screens/tabs/Home';
import DrawerContent from './components/Drawer';
import Profile from './screens/tabs/Profile';
import Store from './screens/tabs/Store';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Stack.Screen name='Tabs' component={MyTabs} />
    </Drawer.Navigator>
  );
}

const App = () => {
  
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          {/* <Stack.Screen name='Tabs' component={MyTabs} /> */}
          <Stack.Screen name="Drawer" component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={({ navigation }) => ({
              headerTitle: 'Product Details',
              headerShown: true,
              headerTransparent: true,
              headerTintColor: '#fff',
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={require('./assets/icons/arrow.png')}
                    style={{ width: 9, height: 13, marginLeft: 15, tintColor: '#fff' }}
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
                  <Image
                    style={{ width: 22, height: 22, tintColor: '#fff' }}
                    source={require('./assets/icons/store.png')}
                  />
                  <Image
                    style={{ width: 19, height: 23, tintColor: '#fff' }}
                    source={require('./assets/icons/notification.png')}
                  />
                </View>
              )
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;