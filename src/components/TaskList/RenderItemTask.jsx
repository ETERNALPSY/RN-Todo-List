import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../global/colors'

const RenderItemTask = ({ item, index, onPressTask, setList, list }) => {
   return (
      <Pressable onPress={() => {
         (item = {
            ...item,
            id: index
         })
         onPressTask(item)
      }}>
         <View style={[styles.task, item.completed ? styles.done : styles.notYet]} >
            <Text style={styles.taskText} >{item.task}</Text>
            <View style={styles.wrapper}>
               <Text style={[styles.taskStatus, item.completed ? styles.taskDone : styles.taskNotYet]}>{item.completed ? 'Completa' : 'Pendiente'}</Text>
            </View>
         </View>
      </Pressable>
   )
}

export default RenderItemTask

const styles = StyleSheet.create({
   task: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: colors.white,
      padding: 10,
      borderRadius: 10,
      marginVertical: 5,
   },
   done: {
      backgroundColor: colors.red,
   },
   notYet: {
      backgroundColor: colors.blue,
   },
   taskText: {
      fontSize: 30,
      color: colors.white,
   },
   wrapper: {
      borderRadius: 10,
      overflow: 'hidden'
   },
   taskStatus: {
      fontSize: 20,
      borderRadius: 10,
      padding: 5
   },
   taskDone: {
      backgroundColor: colors.blue
   },
   taskNotYet: {

      backgroundColor: colors.red,
   }
})