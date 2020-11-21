import React from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import {WARNA_UTAMA, WARNA_DISABLE, OpenSans, OpenSansBold} from '../../utils/constant';

import {IconSearch} from '../../assets';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InputText = (props) => {
    return (
        <View>
            <TextInput 
                width           = {props.width}
                secureTextEntry = {props.secureTextEntry}
                placeholder = {props.placeholder} 
                style={styles.textInput_Style(props.borderRadius,props.marginTop)}
                underlineColorAndroid='transparent'
                paddingHorizontal={20}
                textAlign= {props.textAlign}
                fontFamily={OpenSans}
                onChangeText = {props.onChangeText}
                />
        </View>
        
    )
}

export default InputText

const styles = StyleSheet.create({
    textInput_Style: (borderRadius,marginTop) =>({
        borderRadius    : borderRadius != null ? borderRadius : 10,
        height          : windowHeight * 0.07,
        marginTop       : marginTop != null ? marginTop : windowHeight * 0.04,
        borderColor     : WARNA_DISABLE,
        borderWidth     : 1,
        backgroundColor : '#fff',
        
    }),
    
    
})
