import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native';

type Props = {
    text: string
    children: any
    link: string
    path: string
}

const AuthLayout = ({ text, children, link, path }: Props) => {
    return (
        <ImageBackground
            resizeMode='cover'
            style={{ flex: 1, justifyContent: 'flex-end' }}
            source={require('../../assets/images/login-bg.png')}
        >
            <View style={styles.box}>
                <Text style={styles.text}>{text}</Text>
                {children}
                <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center' }}>
                    <Text style={styles.link}>
                        Create An Account{' '}
                        <Link style={styles.path} to={path}>
                            {link}
                        </Link>
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
};
export default AuthLayout

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        height: '70%',
        // borderRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 30,
    },
    text: {
        fontSize: 36,
        color: '#000',
        // fontFamily: ''
        fontWeight: 'bold',
    },
    link: {
        color: '#575757',
        fontSize: 14,
        fontWeight: 'regular',
    },
    path: {
        color: '#903700',
        fontSize: 14,
        fontWeight: 'semibold',
    }
})