import React from 'react'
import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import {WARNA_UTAMA, WARNA_DISABLE, OpenSans, OpenSansBold} from '../../utils/constant';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HeaderText = (props) => {
    return (
        <View marginTop={props.marginTop}
        marginLeft={props.marginLeft}
        alignItems={props.textAlign}>
            <Text    
                 
            style={styles.textLogin(props.fontSize, props.color)}
             >
            {props.title}
        </Text>
        </View>
        
    )
}

export default HeaderText

const styles = StyleSheet.create({
    textLogin: (fontSize,color) =>({
        fontSize : fontSize != null ? fontSize : 29,
        fontFamily: OpenSansBold,
        color : color
        
    }),
})
