import { SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from '../global/colors'
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
//stacks
import ToDoStack from './ToDoStack'
import PokemonStack from './PokemonStack'
//screens
import Counter from '../screens/Counter'


const Tab = createBottomTabNavigator()

const Navigator = () => {
   return (
      <SafeAreaView style={styles.container}>
         <NavigationContainer>
            <Tab.Navigator
               screenOptions={{
                  headerShown: false,
                  tabBarShowLabel: false,
                  tabBarStyle: styles.tabBar,
                  tabBarHideOnKeyboard: true
               }}
            >
               <Tab.Screen
                  name='To Do list'
                  component={ToDoStack}
                  options={{
                     tabBarIcon: ({ focused }) => {
                        return (
                           <View>
                              <MaterialCommunityIcons name="format-list-checks" size={24} color={focused ? colors.white : colors.blue} />
                           </View>
                        )
                     }
                  }}
               />
               <Tab.Screen
                  name='Pokemon Gallery'
                  component={PokemonStack}
                  options={{
                     tabBarIcon: ({ focused }) => {
                        return (
                           <View>
                              <SimpleLineIcons name="picture" size={24} color={focused ? colors.white : colors.blue} />
                           </View>
                        )
                     }
                  }}
               />
               <Tab.Screen
                  name='Counter'
                  component={Counter}
                  options={{
                     tabBarIcon: ({ focused }) => {
                        return (
                           <View>
                              <MaterialCommunityIcons name="counter" size={24} color={focused ? colors.white : colors.blue} />
                           </View>
                        )
                     }
                  }}
               />
            </Tab.Navigator>
         </NavigationContainer>
      </SafeAreaView>
   )
}

export default Navigator

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: colors.navyBlue
   },
   tabBar: {
      alignSelf: 'center',
      width: '100%',
      backgroundColor: colors.navyBlue,
      borderTopWidth: 2,
      borderTopColor: colors.blue
   }
})