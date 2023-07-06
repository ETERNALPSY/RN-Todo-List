import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import RenderItemTask from './RenderItemTask'

const TaskList = ({ list, onPressTask, setList }) => {
   return (
      <View style={styles.view2}>
         <FlatList
            style={styles.flat}
            data={list}
            keyExtractor={(item, idx) => idx}
            renderItem={({ item, index }) => RenderItemTask({ item, index, onPressTask, setList, list })}
         />
      </View>
   )
}

export default TaskList

const styles = StyleSheet.create({
   view2: {
      flex: 5,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#153462',
      width: '100%',
      paddingVertical: 15,
   },
   flat: {
      width: '90%'
   },
})