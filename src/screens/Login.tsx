import React from 'react'
import AuthLayout from '../components/layout/AuthLayout'
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'

function Login({ navigation }: any) {

    return (
        <AuthLayout text='Welcome Back!' link='Sign Up' path='/SignUp' >
            <View style={{ flex: 1, paddingTop: 30 }}>
                <TextInput style={styles.input} placeholder='Username or Email' />
                <TextInput style={styles.input} placeholder='Password' />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Drawer')}>
                    <Text style={styles.btntext}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.Ortext}>- OR Continue with -</Text>
                <Image style={styles.social} source={require('../assets/images/socials.png')} />
            </View>
        </AuthLayout>
    )
}

export default Login

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#A8A8A9',
        borderRadius: 10,
        // color: '#575757',
        fontSize: 14,
        height: 55,
        padding: 10,
        backgroundColor: '#F3F3F3',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#852604',
        borderRadius: 5,
        height: 48,
        justifyContent: 'center',
        marginTop: 10,
    },
    btntext: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    Ortext: {
        color: '#575757',
        fontSize: 12,
        fontWeight: 'medium',
        textAlign: 'center',
        // marginVertical: 40,
        marginTop: 10,
        marginBottom: 30,
    },
    social: {
        height: 50,
        width: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
    }
})