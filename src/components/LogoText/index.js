import React from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import {WARNA_UTAMA, WARNA_DISABLE, OpenSans, OpenSansBold} from '../../utils/constant';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LogoText = ({title, color, marginLeft, marginTop, fontSize, marginBottom, fontStyle}) => {
    return (
        <View>
             <Text
                style={styles.forgotPassword(color,marginLeft, marginTop,fontSize, marginBottom, fontStyle)}
                >
                {title}
            </Text>
        </View>
    )
}

export default LogoText

const styles = StyleSheet.create({
    forgotPassword:(color, marginLeft,marginTop, fontSize, marginBottom, fontStyle) => ({
        marginLeft      : marginLeft,
        marginTop       : marginTop,
        fontFamily      : "Natyl",
        color           : color,
        fontSize        : fontSize,
        marginBottom    : marginBottom,
        
    }),
})
