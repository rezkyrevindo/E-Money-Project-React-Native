import React from 'react'
import { StyleSheet, TouchableOpacity, View , Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CardToDo = (props) => {
    return (
        <TouchableOpacity style={styles.container} 
            onPress = {props.onPress} 
           >
            {/* <PlainText
            title={props.title}
            color={"#222222"}
            fontSize = {16}
            />
            <PlainText
            title={props.deskripsi}
            color={"#222222"}
            fontSize = {13}
            marginTop = {5}
            /> */}
        </TouchableOpacity>
    )
}

export default CardToDo

const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : windowWidth * 0.9 ,
        padding : 20,
        borderRadius : 10,
        shadowColor     : "#000",
        shadowOffset    : {
            width: 0,
            height: 1,
        },
        shadowOpacity   : 0.22,
        shadowRadius    : 2.22,
        elevation: 1,   
        marginTop : 7,
        marginBottom : 7,
        
    }
})
