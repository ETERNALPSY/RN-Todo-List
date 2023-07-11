import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const TopBar = ({ input, setInput, list, initialState, setList }) => {
   return (
      <View style={styles.view1}>
         <TextInput
            style={styles.input}
            placeholder='Nueva Tarea'
            value={input.task}
            onChangeText={(target) => {
               setInput({
                  ...input,
                  task: target
            })
            }} 
         />
         <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => {
               input.task && setList([...list, input])
               setInput(initialState)
            }}>
            <Text style={styles.buttonAddText}>Agregar Tarea</Text>
         </TouchableOpacity>
      </View>
   )
}

export default TopBar

const styles = StyleSheet.create({
   view1: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.navyBlue,
      padding:10
   },
   input: {
      backgroundColor: colors.white,
      fontSize:30,
      flex:3,
      borderBottomColor: colors.red,
      borderBottomWidth: 3,
      padding: 10,
      marginRight:10,
      borderRadius:10

   },
   buttonAdd: {
      flex:1,
      alignItems: 'center',
      paddingVertical:10,
      paddingHorizontal:5,
      backgroundColor: colors.blue,
      borderRadius: 10
   },
   buttonAddText:{
      color: colors.white,
      fontSize:25,
      textAlign:'center',
   }
})