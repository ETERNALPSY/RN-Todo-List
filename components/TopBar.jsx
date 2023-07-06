import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

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
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#153462',
      width: '100%',
      padding:10
   },
   input: {
      backgroundColor: '#FFF',
      fontSize:30,
      flex:2,
      borderBottomColor: '#E13A9D',
      borderBottomWidth: 3,
      padding: 10,
      marginRight:10,
      borderRadius:10

   },
   buttonAdd: {
      color: '#252A34',
      flex:1,
      alignItems: 'center',
      paddingVertical:10,
      paddingHorizontal:5,
      backgroundColor: '#E13A9D',
      borderRadius: 10
   },
   buttonAddText:{
      color: '#FCFFE7',
      fontSize:30,
      textAlign:'center',
   }
})