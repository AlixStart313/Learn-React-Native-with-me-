
/*un view es un div y un text es un p o un label*/
//import { View, Text } from 'react-native'
import React from 'react'
//
import { NavigationContainer } from '@react-navigation/native'
//
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//iconos
import { Icon } from '@rneui/base'

//import Profile from '../../module/profile/adapters/screens/Profile'
import ProfileStack from './stack/ProfileStack'
import AboutStack from './stack/AboutStack'

//import About from '../../module/about/adapters/screens/About'

const Tab =createBottomTabNavigator();


export default function Navigation() {
  return (
    
    <NavigationContainer>
        
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
        name='Profile'
        options={{title:'Perfil'}}
        //que vista se debe de renderizar
        component={ProfileStack}
        />

        <Tab.Screen
        name='About'
        //el title es el que se pone en la parte de abajo y bajo el icono
        options={{title:'conocenos'}}
        //que vista se debe de renderizar
        component={AboutStack}
        />

       </Tab.Navigator>
    </NavigationContainer>
  )
}


const screenOptions=(route,color)=>{
    let iconName;
    switch(route.name){
        case 'Profile':
            iconName='account-circle-outline';
        break;
        case 'About':
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