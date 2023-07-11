import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native'
import React from 'react'
import RenderItemTask from './RenderItemTask'
import { colors } from '../../global/colors'

const TaskList = ({ list, onPressTask, setList, newList, setNewList }) => {
   return (
      <View style={styles.view2}>
         <FlatList
            style={styles.flat}
            data={list}
            keyExtractor={(item, idx) => idx}
            renderItem={({ item, index }) => RenderItemTask({ item, index, onPressTask, setList, list })}
         />
         { (list.length === 0) ||
            <Pressable
               onPress={()=> {
                  setNewList(!newList) 
                  setList([])} }
               style={styles.deleteList}>
               <Text style={styles.deleteText}>Borrar Lista</Text>
            </Pressable>
         }
      </View>
   )
}

export default TaskList

const styles = StyleSheet.create({
   view2: {
      flex: 5,
      alignItems: 'center',
      backgroundColor: colors.navyBlue,
      width: '100%',
      paddingVertical: 15,
   },
   flat: {
      width: '100%',
      padding: 10,
   },
   deleteList: {
      backgroundColor: colors.red,
      padding: 20,
      borderRadius: 10,

   },
   deleteText: {
      color: colors.white,
      fontSize: 25,
   }
})