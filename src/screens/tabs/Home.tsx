import Header from '../../components/Header';
import React from 'react'
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

const data = [
    require('../../assets/images/Placeholder_01.png'),
    require('../../assets/images/Placeholder_02.png'),
    require('../../assets/images/Placeholder_03.png'),
    require('../../assets/images/Placeholder_04.png'),
    require('../../assets/images/Placeholder_05.png'),
]

const product = [
    {
        name: 'Product 1',
        image: require('../../assets/images/product1.png'),
        price: 100
    },
    {
        name: 'Product 2',
        image: require('../../assets/images/product2.png'),
        price: 200
    },
    {
        name: 'Product 3',
        image: require('../../assets/images/product3.png'),
        price: 300
    },
    {
        name: 'Product 4',
        image: require('../../assets/images/product4.png'),
        price: 400
    },
]


function Home({ navigation }: any) {


    const renderItem = (item: any) => (
        <TouchableOpacity style={styles.cirecle}>
            <Image style={{ width: 56.67, height: 56.67 }} source={item} />
        </TouchableOpacity>
    )

    const renderItem2 = (item: any) => (
        <TouchableOpacity style={{ paddingVertical: 20, paddingRight: 10 }}>
            <View style={styles.productbox}>
                <Image style={styles.product} resizeMode='contain' source={item.image} />
            </View>
            <Text style={styles.productname}>{item.name}</Text>
            <Text style={styles.productprice}>${item.price}</Text>
            <StarRatingDisplay
                rating={4.5}
                starSize={11}
                starStyle={{ marginLeft: -1, marginTop: 5 }}
            />
        </TouchableOpacity>
    )
    return (
        <SafeAreaView edges={['top', 'left', 'right']} style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 20 }}>
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground style={styles.bg} resizeMode='contain' source={require('../../assets/images/bg-box.png')}>
                    <View style={styles.box}>
                        <View>
                            <Text style={styles.text}>IT’S TY ME</Text>
                            <Text style={styles.heading}>Take Your Message</Text>
                            <Text style={styles.heading}>Everywhere</Text>
                        </View>
                        <Image style={{ width: 139.06, height: 124 }} source={require('../../assets/images/bookcover.png')} />
                    </View>
                </ImageBackground>
                <Text style={styles.subheading}>Recently viewed</Text>
                <FlatList
                    style={{ marginTop: 15, marginBottom: 20 }}
                    data={data}
                    renderItem={({ item }) => renderItem(item)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <View style={styles.container}>
                    <Text style={styles.subheading}>Recently viewed</Text>
                    <Image style={{ width: 78, height: 27 }} source={require('../../assets/images/filter-button.png')} />
                </View>
                <FlatList
                    style={{ marginTop: 15, marginBottom: 20 }}
                    data={product}
                    renderItem={({ item }) => renderItem2(item)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <View style={styles.container}>
                    <Text style={styles.subheading}>Top Selling</Text>
                    <Image style={{ width: 78, height: 27 }} resizeMode='contain' source={require('../../assets/images/seeall.png')} />
                </View>
                <FlatList
                    style={{ marginTop: 15, }}
                    data={product}
                    renderItem={({ item }) => renderItem2(item)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bg: {
        width: '100%',
        height: 191,
        borderRadius: 40,
        justifyContent: 'center',
        marginVertical: 20
    },
    box: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 5
    },
    heading: {
        fontSize: 15,
        fontWeight: 'semibold',
        color: '#ffff',
        marginTop: 5
    },
    subheading: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#202020'
    },
    cirecle: {
        height: 68,
        width: 68,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 40,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 3.84,
        // Android Shadow
        elevation: 5,
    },
    productbox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
        shadowColor: "#000000",
        shadowOffset: {
            width: 23,
            height: 8,
        },
        shadowOpacity: 0.05,
        shadowRadius: 11,
        elevation: 16
    },
    product: {
        width: 115.18,
        height: 115.18,
        borderRadius: 10
    },
    productname: {
        fontSize: 14,
        fontWeight: 'medium',
        color: '#000',
        marginTop: 5
    },
    productprice: {
        fontSize: 12,
        fontWeight: 'medium',
        color: '#000',
        marginTop: 5
    }
})