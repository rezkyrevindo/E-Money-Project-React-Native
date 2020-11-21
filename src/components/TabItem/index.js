import React from 'react';
import {StyleSheet, View, TouchableOpacity, Dimensions, Text} from 'react-native';
import {IconHome, IconHomeActive, IconProfile, IconProfileActive, IconQR, IconQRWhite, IconQRActive } from '../../assets'
import { WARNA_UTAMA, WARNA_SEKUNDER } from '../../utils/constant'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const navHeight     = windowHeight * 0.07;

const TabItem = ({isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
      if(label === "Home") return isFocused ? <IconHome fill={WARNA_UTAMA} width={32} height={32}  style={styles.iconStyle}/> : <IconHome width={32} height={32} fill={WARNA_SEKUNDER} style={styles.iconStyle} />

      if(label === "QRPay") return  (
      <View style={styles.circle}>
        <IconQR fill={"#fff"} width={32} height={32} style={styles.iconStyle}/>
        
      </View>
      ) 

      if(label === "Profile") return isFocused ? <IconProfile fill={WARNA_UTAMA}  width={32} height={32} style={styles.iconStyle}/> : <IconProfile width={32} height={32} fill={WARNA_SEKUNDER} style={styles.iconStyle} />

  }
  

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <View style={styles.wrap}>
        <Icon />
      </View>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
    container: {
      flexDirection : 'row',
    },
    iconStyle : {
      height   : 32,
      width     : 32,
      
    },
    wrap  : {
      flexDirection : 'column',
      alignItems : 'center',
      justifyContent : 'center'
    },
    text: (isFocused) => ({
      fontSize: isFocused ? 9:9,
      marginTop : -1,
      color: isFocused ? WARNA_UTAMA : WARNA_SEKUNDER,

  }),
  circle: {
    backgroundColor : WARNA_UTAMA,
    borderRadius : 50,
    paddingHorizontal : 9,
    paddingVertical : 9,
    
  }
   
   
});
