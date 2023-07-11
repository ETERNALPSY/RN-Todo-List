import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const Header = () => {
   return (
      <View style={styles.wrapper}>
         <Text style={styles.headerTitle}>Lista de Pendientes</Text>
      </View>
   )
}

export default Header

const styles = StyleSheet.create({
   wrapper:{
      flex:1,
      justifyContent:'center',
      alignContent:'center',
      width:'100%',
      backgroundColor:colors.navyBlue,
      padding:10,
   },
   headerTitle:{
      fontFamily:'Josefin',
      textAlign:'center',
      color:colors.white,
      fontSize:50
   }
})