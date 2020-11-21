import React , { useState } from 'react'
import { StyleSheet, View , FlatList, Text, Dimensions
,StatusBar, SafeAreaView
} from 'react-native'
import {InputText, PlainText,
  HeaderText, ButtonDefault, CardToDo}
   from '../../components'
import {WARNA_UTAMA} from '../../utils/constant';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Todo = () => {
  const [title, onChangeTitle] = useState('');
  const [deskripsi, onChangeDeskripsi] = useState('');
  const [list, setList] = useState([]);
  
  // const header = () => {
  //   return (
      
  //   )
  // }
  
  
  return (
    <View style={styles.container} >
      <View>
        <StatusBar  
        backgroundColor={"#FFF"} 
        barStyle="dark-content" />
      </View>
          
      <View style={styles.header}>
        <HeaderText
          color = {"#000"}
          title={"Todo List"}
          textAlign={"center"}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.adding}>
        <InputText 
            width       = {windowWidth * 0.8}
            placeholder = "Judul Kegiatan kamu" 
            onChangeText={text => onChangeTitle(text)}
            marginTop = {10}
            />
          <InputText 
            width       = {windowWidth * 0.8}
            placeholder = "Deskripsi kegiatan kamu " 
            onChangeText={text => onChangeDeskripsi(text)}
            marginTop = {10}
            />
          <ButtonDefault  
            onPress={()=> 
            setList([...list, {'key' : list.length + 1 , 'title' : title , 'deskripsi' : deskripsi, }])
            }
            title="ADD"
            width       = {windowWidth*0.5}
            marginTop   = {windowHeight * 0.033}
          />
        </View>
        <PlainText
          title={"Kegiatan Kamu"}
          color={"#000"}
          marginTop = {windowHeight * 0.033}
          fontSize = {20}
        />
        <FlatList
            data={list}
            renderItem = {({item}) => 
            <CardToDo
              title = {item.title}
              deskripsi = {item.deskripsi}
            />
            }
          />
       

      </View>
    </View>
    
    
  )
}

export default Todo

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFF'
  },
  header: {
    backgroundColor : '#FFF',
    width: windowWidth,
    height: windowHeight * 0.1,
    alignItems : 'center',
    justifyContent : 'center',
  },
  body:{
    flexDirection : 'column',
    alignItems : 'center',
    
  },
  adding:{
    backgroundColor : WARNA_UTAMA,
    padding : 20,
    borderRadius : 20,
    shadowColor     : "#000",
    shadowOffset    : {
        width: 0,
        height: 1,
    },
    shadowOpacity   : 0.22,
    shadowRadius    : 2.22,
    elevation: 3,   
    alignItems : 'center'
  }
})


