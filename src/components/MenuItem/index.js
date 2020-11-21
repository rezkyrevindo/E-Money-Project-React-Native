import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'


import { IconHistoryActive, IconTransferMoney, IconAddMoney} from '../../assets'
import { PlainText} from '../../components'
const MenuItem = (props) => {
    const Icon = () => {
        if (props.title == "Transfer"){
            return <IconTransferMoney onPress={props.onPress} width={36} height={36} />
        }
        if (props.title == "Top Up"){
            return <IconAddMoney onPress={props.onPress} width={36} height={36} />
        }
        if (props.title == "Riwayat"){
            return <IconHistoryActive onPress={props.onPress} width={36} height={36} />
        }
        return <IconTransferMoney onPress={props.onPress} width={36} height={36} />
    }
    return (
        <TouchableOpacity style={styles.itemMenu}
        onPress={props.onPress}
        >   
            
            <Icon />
            <PlainText
            fontSize= {14}
            title={props.title}
            color={"#555555"}
            marginTop = {5}
            />
        </TouchableOpacity>
    )
}

export default MenuItem

const styles = StyleSheet.create({
    itemMenu : {    
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        padding:10,
        
    }, 
})
