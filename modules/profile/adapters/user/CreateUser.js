import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { isEmpty,size } from 'lodash'
import { Image } from '@rneui/base'
import Loading from '../../../../kernel/components/Loading'
import { useState } from 'react'
import { Icon } from '@rneui/themed'
import { Input } from 'react-native-elements'
export default function CreateUser() {
    const payload={
        email:'',
        passsword:'',
        repeatPassword:'',
    }
    const {show,setShow}=useState(false)
    const {error, setError}=useState({email:'',passsword:''}) 
    const {data,setData}=useState()
    const {showPassword, setPasswordShow}=useState
      return (
   <KeyboardAwareScrollView>
    <Image
    source={require('../../../../assets/splash.png')}
    resizeMode='contain'
    styles={styles.logo}
    />
    <View style={styles.viewForm}>
        <View style={styles.container}>
            <Input 
            placeholder='Correo electronico'
            KeyboardType='email-addres'
            rigthIcon={
                <Icon type="material_community" name="email" 
                containerStyle={styles.Input}
                onChange={(e)=>changePayload(e,"Email")}
                />
            }
            />

            <Input
            placeholder='Contraseña'
            containerStyle={styles.input}
            rigthIcon={
                <Icon
                type="material_community"
                name={showPassword?'eye-of-outline':'eye-out'}
                size={22}
                onPress={()=> setPasswordShow(!showPassword)}
                />
            }
            />
            <Input
            placeholder='Repetir contraseña'
            containerStyle={styles.input}
            rigthIcon={
                <Icon
                type="material_community"
                name={showPassword?'eye-of-outline':'eye-out'}
                size={22}
                onPress={()=> setPasswordShow(!showPassword)}
                />
            }
            />
        </View>

    </View>
    <Loading show={show} text='Registrar nuevo usuario' />
   </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({})