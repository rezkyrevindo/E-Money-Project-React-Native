import React from 'react'
import { StyleSheet,  View } from 'react-native'
import {WARNA_UTAMA} from '../../utils/constant';
import {PlainText, ButtonPrimary, InputText} from '../../components'
import { IconAddMoneyWhite, IconTransferMoneyWhite} from '../../assets'
const Transfer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <IconTransferMoneyWhite  width={100} height={100} fill={"#FFF"}/>
                
                
                <View style={{flexDirection : 'column'}}>
                    <PlainText
                                    
                        fontSize= {18}
                        title="Transfer Saldo  "
                        color={"#fff"}
                        marginLeft = {20}
                        fontStyle={"bold"}
                    />
                    <PlainText
                                    
                        fontSize= {12}
                        title="Transfer saldo dengan mudah "
                        color={"#fff"}
                        marginLeft = {20}
                        marginTop = {5}
                        
                    />
                    <PlainText
                                    
                        fontSize= {12}
                        title="Masukan nominal yang kamu inginkan  "
                        color={"#fff"}
                        marginLeft = {20}
                        
                    />


                </View>
            </View>
            <View style={styles.content}>
                <InputText 
                
                    placeholder = "Nominal Top Up" 
                    secureTextEntry = {false} 
                    />
                <InputText 
                    
                    placeholder = "Nomor Handphone" 
                    secureTextEntry = {false} 
                />
                <ButtonPrimary  
                    onPress={() => {
                        navigation.navigate('MainApp');
                    }}
                    title="Check Nomor"
                    type="text"
                    marginTop= {20}
                    />
            </View>
        </View>
    )
}

export default Transfer

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    header : {
        flexDirection : 'row',
        alignItems :'center',
        backgroundColor : WARNA_UTAMA,
        padding : 20,
        paddingBottom :50,
    },
    content : {
        flex : 1,
        padding : 20,
        backgroundColor : '#fff',
        paddingBottom :50,
        marginTop : -30,
        borderRadius  : 20,
    }, 
})
