
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import About from '../../../module/about/adapters/screens/About'


const Stack = createNativeStackNavigator();


export default function AboutStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerMode:'screen',
        headerTinColor:'white',
        headerStyle:{backgroundColor:'#ff5a60'}
    }}>
        <Stack.Screen
        name='aboutStack'
        options={{title:'Acerca de nosotros'}}
        component={About}
        />
    </Stack.Navigator>
  )
}