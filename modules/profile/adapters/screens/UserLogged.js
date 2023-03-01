import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react';
import { Button,Avatar } from "@rneui/base";
import AsyncStorage from 'react-native';
import Loading from '../../../../kernel/components/Loading';

export default function UserLogged(props) {
  const {setReload,user}=props;
  console.log("mi sesion",user);
  const {show,setShow}=useState(false)
  const removeValue = async ()=>{
    try {
      setShow(true)
      await AsyncStorage.removeItem('@session')
      setShow(false)
      setReload(true)
    } catch(e) {
      //  error reading value
    }
    console.log('Done.')
  }
  
 
  return (
    <View styles={styles.container}>
      <View style={styles.infoContainer}>
        <Avatar
              size="large"
              rounded
              source={{uri:'https://firebasestorage.googleapis.com/v0/b/finanzas-45686.appspot.com/o/avatar%2FJQOEUCS3pDXkv1HauiZCe7pWUC42.jpg?alt=media&token=7a75d3ed-7e96-40d8-8461-0b2c6bffcd55'}}
              containerStyle={styles.avatar}>

              
              <Avatar.Accessory
              size={2}
              onPress
              />
            </Avatar>
            <View>
              <Text style={styles.displayName}>{user.providerData[0].displayName ? user.providerData[0].displayName : "anonimor"}</Text>
              <Text >{user.providerData[0].email}</Text>
            </View>
      </View>
      
    <Button
    title='cerrar sesion'
    buttonStyle={styles.btn}
    onPress={()=>console.log('cerrarndo sesion')}
    />
    <Loading isVisible={show} text="cerrando sesion"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    minHeight:"100%",
    backgroundColor:"#FFF"
  },
  btn:{
    marginTop:30,
    borderRadius:0,
    backgroundColor:"tomato",
    paddingVertical:10
  },
  infoContainer:{
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    paddingVertical:30

  },
  avatar:{
    marginRight:16
  },
  textEmail:{
  },
  displayName:{
    fountWeight:'bold',
    paddingBottom:5
  }
})