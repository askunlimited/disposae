import React from 'react'
import { Image, View, StyleSheet } from 'react-native'


import AppText from './AppText'

import colors from '../config/colors'

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    
    title: {
        fontWeight: "500",
        fontSize: 18,
        
    },
    subTitle: {
        fontSize: 16,
        color: colors.medium,
    }
})

export default ListItem