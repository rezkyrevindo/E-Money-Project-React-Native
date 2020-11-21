import React from 'react'
import { StyleSheet, StatusBar, View , TouchableOpacity, Image} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler';
import {IconQRActive, IconQR, ImgQR, IconWallet} from '../../assets'
import {WARNA_UTAMA, WARNA_DISABLE, WARNA_ABU_ABU, WARNA_BG_ABU} from '../../utils/constant';
import {PlainText, MenuItem, HistoryCard} from '../../components'
const Profile = () => {
    return (
        <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <StatusBar  translucent={false}
                    backgroundColor={WARNA_UTAMA} 
                    barStyle="light-content" />
            </View>
            <View style={styles.header}>
                <PlainText
                                
                    fontSize= {20}
                    title="Akun Saya"
                    color={"#fff"}
                />
                <TouchableOpacity style={styles.wrapQR}>
                    <Image source= {ImgQR} style={styles.qrImg} />
                </TouchableOpacity>
                <PlainText
                    marginTop={10}
                    fontSize= {20}
                    title="REZKY REVINDO"
                    color={"#fff"}
                />
                <PlainText
                    marginTop={5}
                    fontSize= {14}
                    title="08537517855"
                    color={"#fff"}
                />
                
                
            </View>
            <View style={styles.content}>
                <PlainText
                    marginTop={20}
                    fontSize= {14}
                    title="Informasi Umum"
                    color={"#555555"}
                    marginBottom = {20}
                    marginLeft = {20}
                />
                <View style={styles.cardHistory}>
                    <View style={{flex : 1}}>
                        <IconWallet  width={24} height={24}/>
                    </View>
                    <View style={{flex : 6, flexDirection : 'column'}}>
                        <PlainText
                            fontSize= {12}
                            title={"Saldo"}
                            color={"#555555"}
                            marginTop = {5}
                            />
                        <PlainText
                            fontSize= {16}
                            title={"Rp0"}
                            color={"#555555"}
                            marginTop = {5}
                            fontStyle={'bold'}
                            />
                        
                    </View>
                    
                </View>
                <View style={styles.cardHistory}>
                    <View style={{flex : 1}}>
                        <IconWallet  width={24} height={24}/>
                    </View>
                    <View style={{flex : 6, flexDirection : 'column'}}>
                        <PlainText
                            fontSize= {12}
                            title={"Email"}
                            color={"#555555"}
                            marginTop = {5}
                            />
                        <PlainText
                            fontSize= {16}
                            title={"rezkyrevindo3@gmail.com"}
                            color={"#555555"}
                            marginTop = {5}
                            fontStyle={'bold'}
                            />
                        
                    </View>
                    
                </View>

                <PlainText
                    marginTop={20}
                    fontSize= {14}
                    title="Pengaturan"
                    color={"#555555"}
                    marginBottom = {20}
                    marginLeft = {20}
                />

                <TouchableOpacity style={styles.cardHistory}>
                    <View style={{flex : 1}}>
                        <IconWallet  width={24} height={24}/>
                    </View>
                    <View style={{flex : 4, flexDirection : 'column'}}>
                        <PlainText
                            fontSize= {16}
                            title={"Change Profile"}
                            color={"#555555"}
                            marginTop = {5}
                            />
                        
                        
                    </View>
                    <View style={{flex : 2, alignItems : 'flex-end'}}>
                    <PlainText
                        fontSize= {16}
                        title={""}
                        color={"#555555"}
                        marginTop = {5}
                        fontStyle={'bold'}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardHistory}>
                    <View style={{flex : 1}}>
                        <IconWallet  width={24} height={24}/>
                    </View>
                    <View style={{flex : 4, flexDirection : 'column'}}>
                        <PlainText
                            fontSize= {16}
                            title={"Change Password"}
                            color={"#555555"}
                            marginTop = {5}
                            />
                        
                        
                    </View>
                    <View style={{flex : 2, alignItems : 'flex-end'}}>
                    <PlainText
                        fontSize= {16}
                        title={""}
                        color={"#555555"}
                        marginTop = {5}
                        fontStyle={'bold'}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardHistory}>
                    <View style={{flex : 1}}>
                        <IconWallet  width={24} height={24}/>
                    </View>
                    <View style={{flex : 4, flexDirection : 'column'}}>
                        <PlainText
                            fontSize= {16}
                            title={"Logout"}
                            color={"#555555"}
                            marginTop = {5}
                            />
                        
                        
                    </View>
                    <View style={{flex : 2, alignItems : 'flex-end'}}>
                    <PlainText
                        fontSize= {16}
                        title={""}
                        color={"#555555"}
                        marginTop = {5}
                        fontStyle={'bold'}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    header : {
        alignItems : 'center',
        backgroundColor : WARNA_UTAMA,
        padding : 20,
        paddingBottom : 50,
    },
    content : {
        backgroundColor : WARNA_ABU_ABU,
        flex : 1,
        marginTop : -20,
        borderRadius : 20
    }, 
    qrImg : {
        height : 100,
        width : 100,
    },
    wrapQR :{
        marginTop : 50,
        backgroundColor : '#fff',
        padding : 5,
        borderRadius : 10,
    },
    cardHistory : {
        flexDirection : 'row',
        borderTopColor : WARNA_DISABLE,
        borderTopWidth : 1,
        borderBottomWidth : 1,
        borderBottomColor : WARNA_DISABLE,
        padding : 20,
        alignItems : 'center',
        backgroundColor : '#fff'
    }
})
