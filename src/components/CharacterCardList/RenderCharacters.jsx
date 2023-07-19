import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CharacterCard from './CharacterCard'
import pokemon from '../../data/pokemon.json'
import { colors } from '../../global/colors'

const RenderCharacters = ({navigation}) => {

   return (

      <View style={styles.container}>
         <FlatList
            data={pokemon}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <CharacterCard
               item={item}
               navigation={navigation}
            />}
         />
      </View>

   )
}

export default RenderCharacters

const styles = StyleSheet.create({
   container:{
      flex:1,
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:colors.navyBlue
      }
})