import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const Home = ({newList, setNewList}) => {
   return (
      <View style={styles.home}>
         <Pressable
            style={styles.new}
            onPress={ () => setNewList(!newList )}
         >
            <Text style={styles.text}>Crear Nueva Lista</Text>
         </Pressable>
      </View>
   )
}

export default Home

const styles = StyleSheet.create({
   home:{
      flex:5,
      width:'100%',
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