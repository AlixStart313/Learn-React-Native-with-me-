
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Profile from '../../../module/profile/adapters/screens/Profile'
import UserGuest from '../../../module/profile/adapters/screens/UserGuest'
import Login from '../../../module/auth/adapters/screens/Login'
const Stack = createNativeStackNavigator()

export default function ProfileStack() {
  return (
    //cambiar color de cabecera
    //cuando vemos una llave estamos esperando un objeto
    //llaves anidadas es una destructuracion

    //initial router indica cual es nuestro punto inicial
   <Stack.Navigator
   initialRouteName='userGuestStack'
   screenOptions={{
        headerMode:'screen',
        headerTintColor:'white',
        headerStyle:{backgroundColor:'#ff5a60'}
   }}>

        <Stack.Screen
        name='ProfileStack'
        options={{title:'Perfil'}}
        component={Profile}
        />
        <Stack.Screen
        name='userGuestStack'
        options={{title:'Bienvenido'}}
        component={UserGuest}
        />
         <Stack.Screen
        name='LoginStack'
        options={{title:'inicio de sesion'}}
        component={Login}
        />
   </Stack.Navigator>

  )
}

