import { StyleSheet, View } from 'react-native'
import React from 'react'
import RenderCharacters from '../components/CharacterCardList/RenderCharacters'
import { colors } from '../global/colors'

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
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.navyBlue     
   }
})