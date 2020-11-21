import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {HistoryCard} from '../../components'

const History = ({navigation}) => {
    return (
        <View styles={styles.container}>
            <View style={styles.content}>
                <HistoryCard 
                    type={"deacrease"}
                    title={"Transfer ke 085375717855"}
                    date= {"20 Okt 2020 - 19.10"}
                    value={"-Rp 10.000"}
                />
                <HistoryCard 
                    type={"increase"}
                    title={"Top Up Saldo"}
                    date= {"20 Okt 2020 - 18.10"}
                    value={"Rp 10.000"}
                />
            </View>
            
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff'
    },
    content : {
        padding : 20,
        backgroundColor : '#fff',
    }, 
})
