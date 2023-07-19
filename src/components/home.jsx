import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const Home = ({navigation}) => {
   return (
      <View style={styles.home}>
         <Pressable
            style={styles.new}
            onPress={ () => navigation.navigate('Lista de Pendientes')}
         >
            <Text style={styles.text}>Crear Nueva Lista</Text>
         </Pressable>
         <Pressable
            style={styles.new}
            onPress={ () => navigation.navigate('Pokemon')}
         >
            <Text style={styles.text}>Galería Pokemon</Text>
         </Pressable>
      </View>
   )
}

export default Home

const styles = StyleSheet.create({
   home:{
      flex:5,
      width:'100%',
      justifyContent:'space-around',
      alignItems:'center',
      backgroundColor:colors.navyBlue,
   },
   new:{
      backgroundColor:colors.red,
      padding:20,
      borderRadius:10
   },
   text:{
      fontSize:40,
      color:colors.white
   }
})