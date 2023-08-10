import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Pokemon from '../screens/Pokemon'
import CharacterDetail from '../screens/CharacterDetail'

const Stack = createNativeStackNavigator()

const PokemonStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false }}
      >
         <Stack.Screen
            name='Pokemon'
            component={Pokemon}
         />
         <Stack.Screen
            name='Character Detail'
            component={CharacterDetail}
         />
      </Stack.Navigator>
   )
}

export default PokemonStack

const styles = StyleSheet.create({})