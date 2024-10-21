import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StarRatingDisplay } from 'react-native-star-rating-widget'



const products = [
  {
    id: '1',
    title: 'Mugs',
    description: 'Azure and Wheat Casual...',
    price: '$10.99',
    rating: 4.5,
    reviews: '102 Reviews',
    image: require('../../assets/images/product10.png'),
  },
  {
    id: '2',
    title: 'Mens Starry',
    description: 'Mens, Starry Printed...',
    price: '$12.50',
    rating: 4.2,
    reviews: '142 Reviews',
    image: require('../../assets/images/product2.png'),
  },
  {
    id: '3',
    title: 'Bottle',
    description: 'Black Bottle Deal for Women',
    price: '$9.00',
    rating: 4.8,
    reviews: '212 Reviews',
    image: require('../../assets/images/product3.png'),
  },
  {
    id: '4',
    title: 'T-Shirts',
    description: 'Cotton Shirt for Men',
    price: '$10.99',
    rating: 4.5,
    reviews: '102 Reviews',
    image: require('../../assets/images/product4.png'),
  },
  {
    id: '5',
    title: 'T-Shirts',
    description: 'Cotton Shirt for Men',
    price: '$10.99',
    rating: 4.5,
    reviews: '102 Reviews',
    image: require('../../assets/images/product5.png'),
  },
  {
    id: '6',
    title: 'T-Shirts',
    description: 'Cotton Shirt for Men',
    price: '$10.99',
    rating: 4.5,
    reviews: '102 Reviews',
    image: require('../../assets/images/product6.png'),
  },
  {
    id: '7',
    title: 'T-Shirts',
    description: 'Cotton Shirt for Men',
    price: '$10.99',
    rating: 4.5,
    reviews: '102 Reviews',
    image: require('../../assets/images/product7.png'),
  }
  // Add more items here
];



export default function Store({ navigation }: any) {

  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')} style={{ margin: 5, flex: 1 }}>
        <Image style={styles.product} resizeMode='cover' source={item.image} />
        <View style={styles.productbox}>
          <Text style={styles.productname}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.productprice}>${item.price}</Text>
          <StarRatingDisplay
            rating={4.5}
            starSize={11}
            starStyle={{ marginLeft: -1, marginTop: 5 }}
          />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 20, paddingTop: 50 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>52,082+ Iteams</Text>
        <Image style={{ width: 100, height: 60 }} source={require('../../assets/images/sort.png')} />
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id.toString() || index.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  productbox: {
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    padding: 10,
    borderRadius: 10,
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
    marginTop: -10,
    zIndex: -1
  },
  product: {
    width: '100%',
    height: 182,
    borderRadius: 10
  },
  productname: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 10
  },
  productprice: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    marginTop: 5
  },
  description: {
    fontSize: 10,
    fontWeight: '400',
    color: '#000',
    marginTop: 5
  },

})