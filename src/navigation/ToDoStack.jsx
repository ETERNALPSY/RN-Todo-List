import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from '../screens/MainScreen'
import Home from '../components/home'

const Stack = createNativeStackNavigator()

const ToDoStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false }}
      >
         <Stack.Screen
            name='Home'
            component={Home}
         />
         <Stack.Screen
            name='Lista de Pendientes'
            component={MainScreen}
         />
      </Stack.Navigator>
   )
}

export default ToDoStack

const styles = StyleSheet.create({})