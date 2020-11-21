import React from 'react'
import {
    StyleSheet,
    Image,
    View,
    Dimensions,
    StatusBar,
  } from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {WARNA_UTAMA, WARNA_WARNING} from '../../utils/constant';
import {ButtonPrimary, InputText, HeaderText, PlainText, ButtonDefault} from '../../components'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Register = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <View>
                <StatusBar translucent 
                backgroundColor={"#FFF"} 
                barStyle="dark-content" />
            </View>
            <ScrollView  showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <PlainText
                            
                        fontSize= {25}
                        title="e-Money"
                        color={WARNA_UTAMA}
                    />
                </View>
                <View style={styles.body}>
                    <HeaderText
                        marginTop = {windowHeight * 0.054}
                        title={"Register"}
                        textAlign={"center"}
                       
                    />
                    <View style={{alignItems:'center'}}>
                        <InputText 
                            width       = {windowWidth * 0.66}
                            placeholder = "Email" 
                            secureTextEntry = {false} 
                            />
                        <InputText 
                            width       = {windowWidth * 0.66}
                            placeholder = "Password" 
                            secureTextEntry = {true} 
                            />
                        <InputText 
                            width       = {windowWidth * 0.66}
                            placeholder = "Nama" 
                            secureTextEntry = {false} 
                            />
                        <InputText 
                            width       = {windowWidth * 0.66}
                            placeholder = "Nomor HP" 
                            secureTextEntry = {false}
                            />
                        
                    </View>

                   
                    <View style={{alignItems:'center'}}>
                        <ButtonPrimary  
                            type="text"
                            onPress={() => {
                                navigation.navigate('Verification');
                            }}
                            title="Continue"
                            width={windowWidth*0.6}
                            marginTop   = {windowHeight * 0.033}
                        />
                    </View>


                    <View style={{alignItems:'center'}}>
                      
                        <TouchableOpacity  onPress={() => {
                                navigation.navigate('Login');
                            }}>
                            <PlainText
                                title={"Back to Login"}
                                color={WARNA_UTAMA}
                                marginTop = {windowHeight * 0.033}
                                fontSize = {13}
                            />
                        </TouchableOpacity>
                        <PlainText
                                title={"By continuing, you agree to our"}
                                color={"#000"}
                                marginTop = {windowHeight * 0.033}
                                fontSize= {10}
                            />
                        <PlainText
                            title={"Terms of Service and Privacy Policy "}
                            color={WARNA_UTAMA}
                            marginTop = {windowHeight * 0.01}
                            fontSize= {10}
                            marginBottom={50}
                        />
                    </View>
                    
                </View>

            </ScrollView>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white' 
    },
    header: {
        width: windowWidth,
        height: windowHeight * 0.11,
        paddingTop : 40,
        alignItems : 'center',
    },
    logo : {
        width : windowWidth * 0.36,
        height : windowHeight * 0.052
    },
    body:{
        flex:1,
    },
    otherLogin : {
        flexDirection   : 'row',
        width           : windowWidth * 0.30,
        textAlign       : 'center',
        justifyContent  : 'space-between',
        marginLeft      : windowWidth * 0.35,
        marginRight     : windowWidth * 0.35,
        marginTop       : windowHeight * 0.02,
    }
})
