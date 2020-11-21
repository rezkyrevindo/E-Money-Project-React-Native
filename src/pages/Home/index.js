import React from 'react'
import { StyleSheet, View, StatusBar} from 'react-native'

import {IconWalletWhite} from '../../assets'
import {WARNA_UTAMA, WARNA_SECONDARY} from '../../utils/constant';
import {PlainText, MenuItem, HistoryCard, LogoText} from '../../components'

const Home = ( {navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <StatusBar  translucent={false}
                    backgroundColor={WARNA_UTAMA} 
                    barStyle="light-content" />
            </View>
            <View style={styles.header}>
                
                <LogoText
                    
                    fontSize= {30}
                    title="e-Money"
                    color={"#fff"}
                />
                <View style={styles.wrappingHello}>
                    <PlainText
                                
                        fontSize= {26}
                        title="Hello, "
                        color={"#fff"}
                        marginTop = {5}
                    />
                    <PlainText
                                
                        fontSize= {26}
                        title="Rezky Revindo"
                        color={"#fff"}
                        marginTop = {5}
                        fontStyle = {"bold"}
                    />
                </View>
                <PlainText
                    fontSize= {14}
                    title="Transaksi nyaman dan aman pakai e-Money"
                    color={"#fff"}
                />

                <View style={styles.wrappingHello}>
                    <IconWalletWhite width={28} height = {28} />
                    <PlainText
                        marginLeft= {10}
                        fontSize= {16}
                        title="Rp"
                        color={"#FFF"}
                    />
                    <PlainText
                        marginLeft= {10}
                        fontSize= {20}
                        title="0"
                        color={"#FFF"}
                        fontStyle = {"bold"}
                    />
                </View>

                
                
            </View>
            <View style={styles.content}>
                <View style={styles.wrapButton}>    
                    <View style={styles.buttonMenu}>
                        <MenuItem title={"Transfer"}
                            onPress={() => {
                                navigation.navigate('Transfer');
                            }}
                        />
                        <MenuItem title={"Top Up"}
                            onPress={() => {
                                navigation.navigate('Top Up');
                            }}
                        />
                        <MenuItem title={"Riwayat"}
                             onPress={() => {
                                navigation.navigate('Riwayat Transaksi');
                            }}
                        />
                    </View>
                    
                </View>
                <PlainText
                    fontSize= {18}
                    title="5 Transaksi Terakhir"
                    color={"#555555"}
                    fontStyle = {"bold"}
                    marginTop = {20}
                    marginBottom = {20}
                    />

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

export default Home

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    header : {
        backgroundColor : WARNA_UTAMA,
        padding : 20,
        paddingBottom : 75,
    },
    content : {
        flex : 1,
        padding : 20,
        backgroundColor : '#fff',
        paddingBottom :50,
    }, 
    wrappingHello :{
        flexDirection : 'row',
        marginTop : 20,
        alignItems : 'center'
    },
    wrapButton :{
      
        backgroundColor : '#fff',
        marginTop : -70,
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
    buttonMenu : {
        flexDirection : 'row',
        justifyContent : 'space-around'
    }
})
