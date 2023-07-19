import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../global/colors'

const CharacterCard = ({item, navigation}) => {

  return (

    <Pressable 
      onPress={()=> navigation.navigate('Character Detail', {pokemonId: item.id})}
      style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
    </Pressable>

  )
}

export default CharacterCard

const styles = StyleSheet.create({
  container: {
    backgroundColor:colors.red,
    padding:10,
    marginVertical:10,
    borderRadius:10
  },
  text:{
    textAlign:'center',
    fontSize:50,
    color:colors.white
  }
})