import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


import colors from '../config/colors';

function AppButton({ title, onPress, color = "primary"}) {
  return( 
  <TouchableOpacity style={[styles.appbutton, {backgroundColor: colors[color]}]} onPress={onPress}>
    <Text style={styles.text}>{ title }</Text>
  </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    appbutton: {
        width: '100%',
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginVertical: 10
    },
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.white,
    }
})

export default AppButton;
