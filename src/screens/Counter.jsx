import { Pressable, StyleSheet, Text, View, TextInput, Keyboard, EventEmitter } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from '../features/counter/counterSlice'

const Counter = () => {

   const [inputValue, setInputValue] = useState('')

   const dispatch = useDispatch()
   const count = useSelector(state => state.counterReducer.value)

   return (
      <View style={styles.container}>
         <View style={styles.resultWrapper}>
            <Text style={styles.result}>{count}</Text>
         </View>

         <View style={styles.addWrapper}>
            <TextInput
               placeholder='Cantidad a agregar'
               style={styles.input}
               value={inputValue}
               onChangeText={target => setInputValue(target)}
               keyboardType='decimal-pad'
            />
            <Pressable
               style={[styles.functionButton, styles.add]}
               onPress={() => {
                  dispatch(incrementByAmount(Number(inputValue)))
                  setInputValue('')
                  Keyboard.dismiss()
               }}
            >
               <Text style={styles.button}>Add</Text>
            </Pressable>
         </View>

         <View style={styles.buttonWrapper}>
            <Pressable
               style={styles.functionButton}
               onPress={() => dispatch(increment())}
            >
               <Text style={styles.button}>+</Text>
            </Pressable>
            <Pressable
               style={styles.functionButton}
               onPress={() => dispatch(decrement())}
            >
               <Text style={styles.button}>-</Text>
            </Pressable>
         </View>

         <Pressable
            style={styles.functionButton}
            onPress={() => dispatch(reset())}
         >
            <Text style={styles.button}>Reset</Text>
         </Pressable>
      </View>
   )
}

export default Counter

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.navyBlue,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 30
   },
   resultWrapper: {
      borderRadius: 10,
      overflow: 'hidden'
   },
   result: {
      fontSize: 90,
      color: colors.blue,
      backgroundColor: colors.white,
      padding: 20,
      borderRadius: 10
   },
   addWrapper: {
      flexDirection: 'row'
   },
   input: {
      flex: 1,
      height: '100%',
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      backgroundColor: colors.white,
      fontSize: 25,
      paddingLeft: 10
   },
   add: {
      height: '100%',
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
   },
   buttonWrapper: {
      flexDirection: 'row',
      gap: 50
   },
   functionButton: {
      borderRadius: 10,
      overflow: 'hidden'
   },
   button: {
      backgroundColor: colors.red,
      fontSize: 30,
      padding: 20,
      color: colors.white,
      textAlign: 'center',
   }



})