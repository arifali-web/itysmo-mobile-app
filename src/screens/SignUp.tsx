import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import AuthLayout from '../components/layout/AuthLayout'

const SignUp = () => {
    return (
        <AuthLayout text='Create an Account' link='Login' path='/Login' >
            <View style={{ flex: 1, paddingTop: 30 }}>
                <TextInput style={styles.input} placeholder='Username or Email' />
                <TextInput style={styles.input} placeholder='Password' />
                <TextInput style={styles.input} placeholder='ConfirmPassword' />
                <Text style={styles.Ortext}>By clicking the Register button, you agree to the Terms of public offer</Text>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Login button pressed')}>
                    <Text style={styles.btntext}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </AuthLayout>
    )
}

export default SignUp

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
        // textAlign: 'center',
        // marginVertical: 40,
        // marginTop: 30,
        marginBottom: 10,
        width: 280,
    },
    social: {
        height: 50,
        width: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
    }
})