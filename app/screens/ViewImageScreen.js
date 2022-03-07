import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';


import colors from '../config/colors';
import AppText from '../components/AppText';

function ViewImageScreen( props ) {
  return (
    <View style={styles.container}>
        <View style={styles.closedButton}>
            <MaterialCommunityIcons name="close" size={35} color={colors.white} />
        </View>
        <View style={styles.deleteButton}>
        <MaterialCommunityIcons name="trash-can-outline" size={35} color={colors.white} />
        </View>
        <Image
        resizeMode="contain" 
        style={styles.image} 
        source={require("../assets/chair.jpg")} />
        
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    closedButton: {
        
        position: 'absolute',
        top: 40,
        left: 30,
    },

    deleteButton: {

        position: 'absolute',
        top: 40,
        right: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    }
    
})

export default ViewImageScreen;
