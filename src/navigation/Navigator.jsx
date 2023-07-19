import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//screens
import Home from '../components/home'
import Pokemon from '../screens/Pokemon'
import CharacterDetail from '../screens/CharacterDetail'
import MainScreen from '../screens/MainScreen'
import { colors } from '../global/colors'

const Stack = createNativeStackNavigator()

const Navigator = () => {
   return (
      <SafeAreaView style={styles.container}>
         <NavigationContainer>
            <Stack.Navigator
               screenOptions={
                  {
                     headerShown:false
                  }
               }
            >
               <Stack.Screen
                  name='Home'
                  component={Home}
               />
               <Stack.Screen
                  name='Lista de Pendientes'
                  component={MainScreen}
               />
               <Stack.Screen
                  name='Pokemon'
                  component={Pokemon}
               />
               <Stack.Screen
                  name='Character Detail'
                  component={CharacterDetail}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </SafeAreaView>
   )
}

export default Navigator

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor:colors.navyBlue
   },
})