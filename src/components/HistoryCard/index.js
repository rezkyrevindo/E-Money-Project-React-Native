import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconArrowDown, IconArrowUp} from '../../assets'
import {WARNA_UTAMA, WARNA_SECONDARY,WARNA_DISABLE} from '../../utils/constant';
import { PlainText} from '../'

const HistoryCard = (props) => {

    const Icon = () => {
        if (props.type == "increase"){
            return <IconArrowUp width={36} height={36} />
        }
        if (props.type == "deacrese"){
            return <IconArrowDown width={36} height={36} />
        }
        
        return <IconArrowDown width={36} height={36} />
    }

    return (
        <View style={styles.cardHistory}>
            <View style={{flex : 1}}>
                <Icon/>
            </View>
            <View style={{flex : 4, flexDirection : 'column'}}>
                <PlainText
                    fontSize= {16}
                    title={props.title}
                    color={"#555555"}
                    marginTop = {5}
                    />
                <PlainText
                    fontSize= {12}
                    title={props.date}
                    color={"#555555"}
                    marginTop = {5}
                    />
                
            </View>
            <View style={{flex : 2, alignItems : 'center'}}>
            <PlainText
                fontSize= {16}
                title={props.value}
                color={"#555555"}
                marginTop = {5}
                fontStyle={'bold'}
                />
            </View>
        </View>
    )
}

export default HistoryCard

const styles = StyleSheet.create({
    cardHistory : {
        flexDirection : 'row',
        borderTopColor : WARNA_DISABLE,
        borderTopWidth : 1,
        borderBottomWidth : 1,
        borderBottomColor : WARNA_DISABLE,
        padding : 10,
        alignItems : 'center'
       
    }
})
