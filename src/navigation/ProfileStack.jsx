import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/Profile'
import SelectImage from '../screens/SelectImage'

const Stack = createNativeStackNavigator()

const ProfileStack = () => {

   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen
            name='Profile'
            component={Profile}
         />
         <Stack.Screen
            name='SelectImage'
            component={SelectImage}
         />
      </Stack.Navigator>
   )
}

export default ProfileStack

const styles = StyleSheet.create({})