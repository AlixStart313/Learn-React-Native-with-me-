
/*un view es un div y un text es un p o un label*/
//import { View, Text } from 'react-native'
import React from 'react'
//
import { NavigationContainer } from '@react-navigation/native'
//
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//iconos
import { Icon } from '@rneui/base'

import Profile from '../../module/profile/adapters/screens/Profile'
import About from '../../module/about/adapters/screens/About'

const Tab =createBottomTabNavigator()


export default function Navigation() {
  return (
    //tambien tendremos etiquetas de incio-fin y etiquetas de autocierre
    <NavigationContainer>
        <Text>A las propiedades se les conoce como props
        si no definimos un initialRouteName se ejecutara el primer Tab.screen que este debajo</Text>
       <Tab.Navigator   initialRouteName='profile' 
       screenOptions={({route}) => ({tabBarIcon:({color})=>
       //route es mi Tab.Screen 
       screenOptions(route,color), tabBarActiveTintColor:'tomato',
       //tambien recibe hexadecimal sin problema
       tabBarInactiveTintColor:'gray',
       //hara que el titulo desaparezca
       headerShown:false

    })}
    >
        <Tab.Screen
        name='profile'
        options={{title:'Perfil'}}
        //que vista se debe de renderizar
        component={Profile}
        />
        <Tab.Screen
        name='about'
        //el title es el que se pone en la parte de abajo y bajo el icono
        options={{title:'conocenos'}}
        //que vista se debe de renderizar
        component={About}
        />
       </Tab.Navigator>
    </NavigationContainer>
  )
}


const screenOptions=(route,color)=>{
    let iconName;
    switch(route.name){
        case 'profile':
            iconName='account-circle-outline';
        break;
        case 'about':
            iconName='information';
        break;

    }

    return (
    <Icon 
    type='material-community' 
    name={iconName}
    size={22}
    color={color}
    />)
}