import { StyleSheet, View } from 'react-native'
import React from 'react'
import RenderCharacters from '../components/CharacterCardList/RenderCharacters'


const Pokemon = ({ navigation }) => {

   return (

      <View style={styles.container}>
         <RenderCharacters
            navigation={navigation}
         />
      </View>

   )
}

export default Pokemon

const styles = StyleSheet.create({
   container:{
      flex: 1,
      width:'100%',
      
   }
})