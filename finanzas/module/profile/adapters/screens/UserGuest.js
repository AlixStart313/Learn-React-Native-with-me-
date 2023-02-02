import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image,Button } from '@rneui/base'

//para pode ocupar props, debo de poner la palabra props dentro de nuestro parentesis

export default function UserGuest(props) {
    //console.log(JSON.stringify(props));
    const {navigation} =props
  return (
    <View style={styles.container}>
        <ScrollView style={styles.mx}
         centerContent={true}>
            <Image
            source={require("../../../../assets/presupuesto.png")}
            resizeMode="contain"
            style={styles.img}/>
            <Text style={styles.title}>Bienvenido a ahorradiApp</Text>
            <Text style={styles.desc}> Te gustaria comenzar a ahorrar?
                Nosotros te podemos ayudar, creo o inicia sesion
                descubre la mejor manera de ahorrar tu dinero
            </Text>
            <View style={styles.viewBtnContainer}>
                <Button
                title="Iniciar Sesión"
                icon={{
                    name:'login',
                    type:'material-community',
                    size:15,
                    color:'white'
                }}
                buttonStyles={styles.btn}
                containerStyles={styles.btnContainer}
                onPress={()=>navigation.navigate('ProfileStack')
                }
                />
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"'fff",
        height:"100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    mx:{
        marginLeft:32,
        marginRight:32,
    },
    img:{
        marginTop:64,
        width:"100%",height:200
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:"center",
        margin:16
    },
    desc:{
        textAlign:"center",
        marginBottom:16

    },
    viewBtnContainer:{
       flex:1,
       alignItems:'center'

    },
    btn:{
        backgroundColor:'tomato',
        color:'#fff'
    },
    btnContainer:{
        width:"70%"
    }

})