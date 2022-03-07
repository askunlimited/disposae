import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'

import colors from '../config/colors'

import ListItem from '../components/ListItem'

function ListingDetails() {
  return (
    <View>
        <Image style={styles.image} source={require('../assets/jacket.jpg')} />
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Red Jacket for sale</AppText>
            <AppText style={styles.subTitle}>$100</AppText>
            <View style={styles.listOwnerContainer}>
                <ListItem 
                image={require('../assets/jacket.jpg')}
                title= "Adika King"
                subTitle= "5 listings"
            />
            </View>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
    },
    subTitle: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 5,
    },
    detailsContainer: {
        padding: 20,
    },
    listOwnerContainer: {
        marginVertical: 40,
    }
})

export default ListingDetails