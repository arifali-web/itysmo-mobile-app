import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const ProductDetails = () => {
    const [amount, setAmount] = React.useState(1);

    const handleIncrement = () => {
        setAmount(amount + 1);
    }

    const handleDecrement = () => {
        setAmount(amount - 1);
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.productImage}
                source={require('../assets/images/product10.png')}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollContainer}
            >
                <View style={styles.header}>
                    <Text style={styles.productTitle}>
                        Coffee Mug Royal Ceramic Lovely Design
                    </Text>
                    <Image
                        style={styles.heartIcon}
                        source={require('../assets/icons/heart.png')}
                    />
                </View>
                <View style={styles.ratingContainer}>
                    <Image
                        style={styles.starIcon}
                        source={require('../assets/icons/star.png')}
                    />
                    <Text style={styles.rating}>4.8 </Text>
                    <Text style={styles.reviewText}>(320 Review)</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitle}>Description of product</Text>
                    <Text style={styles.descriptionText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet arcu id tincidunt tellus arcu rhoncus, turpis nisl sed...
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.descriptionTitle}>Choose amount:</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5, borderRadius: 20, backgroundColor: '#F1F1F1', width: 76, height: 26 }}>
                        <TouchableOpacity onPress={handleDecrement}>
                            <Image style={{ width: 20, height: 20, }} source={require('../assets/icons/mins.png')} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: '600', color: '#000', }}>{amount}</Text>
                        <TouchableOpacity onPress={handleIncrement}>
                            <Image style={{ width: 20, height: 20, }} source={require('../assets/icons/plus.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ gap: 5 }}>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: '#828282' }}>Price</Text>
                        <Text style={{ fontSize: 22, fontWeight: '600', color: '#000' }}>$24.00</Text>
                    </View>
                    <TouchableOpacity style={{ width: 181, backgroundColor: '#852604', padding: 15, borderRadius: 4 }}>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff', textAlign: 'center' }}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productImage: {
        width: '100%',
        height: 350,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    scrollContainer: {
        marginTop: -30,
        zIndex: 1,
        padding: 20,
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productTitle: {
        width: 280,
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
    },
    heartIcon: {
        width: 46,
        height: 46,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        gap: 10,
    },
    starIcon: {
        width: 17,
        height: 17,
    },
    rating: {
        fontSize: 16,
        fontWeight: '500',
        color: '#393F42',
    },
    reviewText: {
        marginLeft: -10,
        fontSize: 12,
        fontWeight: '400',
        color: '#393F42',
    },
    descriptionContainer: {
        paddingVertical: 15,
        marginVertical: 20,
        borderColor: '#D7D7D7',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    descriptionTitle: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: '500',
        color: '#393F42',
    },
    descriptionText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#393F42',
    },
});

export default ProductDetails;