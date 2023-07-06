import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const RenderItemTask = ({ item, index, onPressTask, setList, list }) => {
   return (
      <Pressable onPress={() => {
         (item = {
            ...item,
            id:index
         })
         onPressTask(item)}}>
         <View style={[styles.task, item.completed ? styles.done : styles.notYet]} >
            <Text style={styles.taskText} >{item.task}</Text>
            <Text style={[styles.taskStatus, item.completed ? styles.taskDone : styles.taskNotYet]}>{item.completed ? 'Completa' : 'Pendiente'}</Text>
         </View>
      </Pressable>
   )
}

export default RenderItemTask

const styles = StyleSheet.create({
   task: {
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent:'space-between',
      alignItems:'center',
      color: '#FCFFE7',
      padding: 10,
      borderRadius: 10,
      marginVertical:10,
   },
   done: {
      backgroundColor: '#FF2E63',
   },
   notYet: {
      backgroundColor: '#068FFF',
   },
   taskText: {
      fontSize: 30,
      color: '#F6F6F6'
   },
   taskStatus: {
      fontSize:15,
      borderRadius:10,
      padding:5
   },
   taskDone:{
      backgroundColor:'#D9ACF5'
   },
   taskNotYet:{
      
      backgroundColor:'#CBFFA9',
   }
})