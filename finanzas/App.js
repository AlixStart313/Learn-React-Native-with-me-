//siempre se esta corriendo este archivo, es como el index
//El vambio de codigo a grafico se llama renderizado
//investigar ciclo de vida de react

import { StatusBar } from 'expo-status-bar';
//eSTAMOS IMPORTANDO COMPONENTES 
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { initializeApp } from "firebase/app";

import Navigation from './config/navigation/Navigation';
import Profile from './module/profile/adapters/screens/Profile';
//view es la primera es la primera en renderizar

//styleSheets son componentes

//las siguientes dos lineas son un body
export default function App() {
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxGqF5KfNiCSbiENNx-hRi36vcDwmktxs",
  authDomain: "finanzas-45686.firebaseapp.com",
  projectId: "finanzas-45686",
  storageBucket: "finanzas-45686.appspot.com",
  messagingSenderId: "283023775734",
  appId: "1:283023775734:web:f86544fefbd0a5e28759d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  return (
    //un view es igual que ver un div
    //aqui las clases se llaman style
    <Navigation/>

  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alinea a lo vertical 
    alignItems: 'center',
    // alinea a lo horizontal
    justifyContent: 'center',
  },
});


//RNFS y tab para crear las lineas de arriba


//https://reactnativeelements.com/docs este es nuestro boostrap para react, es un framework de diseño