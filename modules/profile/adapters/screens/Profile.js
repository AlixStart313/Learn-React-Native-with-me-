import { Text, View } from "react-native";
import React,{useEffect,useState} from "react";
import {AsyncStorage} from 'react-native';
import Loading from "../../../../kernel/components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";
import { useNavigation } from "@react-navigation/native";



export default function Profile() {
  const [user, setUser] = useState(null);
  const [session,setSession]=useState(null)
  const [reload,setReload]=useState(false);
  const navigation=useNavigation
  useEffect(()=>{
   (async() =>{
    try {
      const value = await AsyncStorage.getItem('@session');
      console.log(value);
      setSession(JSON.parse(value))
      if(value !== null) {
        setUser(true)
      }
    } catch(e) {
      setUser(false)
    }
   })()
   setReload(false)
  },[reload]);
    if(!user === null) return <Loading/>;
    return user ? <UserGuest navigation={navigation}/>:<UserLogged setReload={setReload} user={session}/>;

}
