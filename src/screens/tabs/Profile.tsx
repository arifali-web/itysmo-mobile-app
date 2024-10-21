import { View, Text, ImageBackground, Image, ScrollView } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <ImageBackground resizeMode='cover' style={{ paddingTop: 100, flex: 1, height: '100%', width: '100%' }} source={require('../../assets/images/author-bg.png')}>
      <Image style={{ width: 321, height: 321, justifyContent: 'center', alignSelf: 'center' }} source={require('../../assets/images/author-img.png')} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20, flex: 1, borderTopRightRadius: 30, borderTopLeftRadius: 30, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 15, fontWeight: '500', color: '#000' }}>About The Author</Text>
        <Text style={{ marginVertical: 10, fontSize: 25, fontWeight: '500', color: '#000' }}>Jane M. Wells</Text>
        <Text style={{ fontSize: 12, fontWeight: '400', color: '#393F42' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet arcu id tincidunt tellus arcu rhoncus, turpis nisl sed. Neque viverra ipsum orci, morbi semper. Nulla bibendum purus tempor semper purus. Ut curabitur platea sed blandit. Amet non at proin justo nulla et. A, blandit morbi suspendisse vel malesuada purus massa mi. Faucibus neque a mi hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet arcu id tincidunt tellus arcu rhoncus, turpis nisl sed. Neque viverra ipsum orci, morbi semper. Nulla bibendum purus tempor semper purus. Ut curabitur platea sed blandit. Amet non at proin justo nulla et. A, blandit morbi suspendisse vel malesuada purus massa mi. Faucibus neque a mi hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet arcu id tincidunt tellus arcu rhoncus, turpis nisl sed. Neque viverra ipsum orci, morbi semper. Nulla bibendum purus tempor semper purus. Ut curabitur platea sed blandit. Amet non at proin justo nulla et. A, blandit morbi suspendisse vel malesuada purus massa mi. Faucibus neque a mi hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet arcu id tincidunt tellus arcu rhoncus, turpis nisl sed. Neque viverra ipsum orci, morbi semper. Nulla bibendum purus tempor semper purus. Ut curabitur platea sed blandit. Amet non at proin justo nulla et. A, blandit morbi suspendisse vel malesuada purus massa mi. Faucibus neque a mi hendrerit.
        </Text>
      </ScrollView>
    </ImageBackground>
  )
}