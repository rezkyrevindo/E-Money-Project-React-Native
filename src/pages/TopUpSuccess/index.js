import React from 'react'
import { StyleSheet,  View } from 'react-native'
import {WARNA_UTAMA, WARNA_DISABLE} from '../../utils/constant';
import {PlainText, ButtonPrimary, InputText} from '../../components'
import { IconSuccess, IconTransferMoneyWhite} from '../../assets'
const TopUpSuccess = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>

           
            </View>
            <View style={styles.content}>
                <View style={styles.wrap}>
                    <View style={styles.wrapIconSuccess}>
                        <IconSuccess  width={100} height={100} fill={"#FFF"}/>
                        <PlainText
                            marginTop= {20}
                            fontSize= {18}
                            title="Top Up Berhasil"
                            color={"#555555"}
                            fontStyle = {"bold"}
                        />

                        <PlainText
                            marginTop= {10}
                            fontSize= {24}
                            title="Rp 10.000"
                            color={"#555555"}
                            fontStyle = {"bold"}
                        />
                    </View>
                    
                    <View style={styles.wrapInformasi}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <PlainText
                                marginTop= {20}
                                fontSize= {14}
                                title="Kode Transaksi"
                                color={"#555555"}
                            />
                            <PlainText
                                marginTop= {20}
                                fontSize= {16}
                                title="#251920"
                                color={"#555555"}
                                fontStyle={"bold"}
                            />
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <PlainText
                                marginTop= {20}
                                fontSize= {14}
                                title="Tanggal"
                                color={"#555555"}
                            />
                            <PlainText
                                marginTop= {20}
                                fontSize= {16}
                                title="20 Oktober 2020"
                                color={"#555555"}
                                fontStyle={"bold"}
                            />
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <PlainText
                                marginTop= {20}
                                fontSize= {14}
                                title="Jam"
                                color={"#555555"}
                            />
                            <PlainText
                                marginTop= {20}
                                fontSize= {16}
                                title="19:20"
                                color={"#555555"}
                                fontStyle={"bold"}
                            />
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <PlainText
                                marginTop= {20}
                                fontSize= {14}
                                title="Nominal Transaksi"
                                color={"#555555"}
                            />
                            <PlainText
                                marginTop= {20}
                                fontSize= {16}
                                title="Rp 10.000"
                                color={"#555555"}
                                fontStyle={"bold"}
                            />
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <PlainText
                                marginTop= {20}
                                fontSize= {14}
                                title="Metode"
                                color={"#555555"}
                            />
                            <PlainText
                                marginTop= {20}
                                fontSize= {16}
                                title="BRIVA"
                                color={"#555555"}
                                fontStyle={"bold"}
                            />
                        </View>
                        
                    </View>
                    
                    
                </View>
            </View>
        </View>
    )
}

export default TopUpSuccess

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    header : {
        flexDirection : 'row',
        alignItems :'center',
        backgroundColor : WARNA_UTAMA,
        height: 200,
    },
    content : {
        flex : 1,
        padding : 20,
        backgroundColor : '#fff',
    }, 
    wrap : {
        padding : 20,
        marginTop : -190,
        backgroundColor : '#fff',
        borderRadius : 20,
        paddingVertical : 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    wrapIconSuccess : {
        alignSelf : 'center',
        alignItems : 'center',
    },
    wrapInformasi : {
        marginTop : 20,
        borderTopWidth : 0.5,
        marginBottom : 20
    }
})
