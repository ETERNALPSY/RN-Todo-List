import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const TopBar = ({ input, setInput, list, initialState, setList }) => {
   return (
      <View style={styles.container}>
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
               Keyboard.dismiss()
            }}
         >
            <Text style={styles.buttonAddText}>Agregar Tarea</Text>
         </TouchableOpacity>
      </View>
   )
}

export default TopBar

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      borderRadius:10,
      overflow:'hidden',
      marginVertical:10
   },
   input: {
      backgroundColor: colors.white,
      fontSize:30,
      flex:3,
      borderBottomColor: colors.red,
      borderBottomWidth: 3,
      paddingHorizontal: 10,

   },
   buttonAdd: {
      flex:1,
      alignItems: 'center',
      paddingVertical:10,
      paddingHorizontal:5,
      backgroundColor: colors.red,
   },
   buttonAddText:{
      color: colors.white,
      fontSize:25,
      textAlign:'center',
   }
})