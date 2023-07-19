import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import pokemon from '../data/pokemon.json'
import { colors } from '../global/colors'

const CharacterDetail = ({ navigation, route }) => {

   const { pokemonId } = route.params
   const [pokemonDetail, setPokemonDetail] = useState(null)

   useEffect(() => {
      const pokemonSelected = pokemon.find(item => item.id === pokemonId)
      setPokemonDetail(pokemonSelected)
   }, [pokemonId])

   return (
      pokemonDetail &&
      <View style={styles.container}>
         <Image
            source={{ uri: pokemonDetail.image }}
            resizeMode='cover'
            style={styles.img}
         />
         <View style={styles.textWrapper}>
            <Text style={styles.text}>{pokemonDetail.name}</Text>
         </View>
      </View>
   )
}

export default CharacterDetail

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: colors.navyBlue
   },
   img: {
      width: '80%',
      height: '80%'
   },
   textWrapper:{
      borderRadius:100,
      overflow:'hidden'
   },
   text: {
      fontSize: 60,
      color: colors.white,
      padding: 30,
      textAlign: 'center',
      backgroundColor: colors.red
   }
})