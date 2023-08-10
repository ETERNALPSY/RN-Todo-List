import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CharacterCard from './CharacterCard'
import pokemon from '../../data/pokemon.json'

const RenderCharacters = ({ navigation }) => {

   return (


      <FlatList
         data={pokemon}
         keyExtractor={item => item.id}
         renderItem={({ item }) => <CharacterCard
            item={item}
            navigation={navigation}
         />}
         centerContent={true}
      />


   )
}

export default RenderCharacters

const styles = StyleSheet.create({

})