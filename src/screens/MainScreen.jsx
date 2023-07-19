import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopBar from '../components/TopBar'
import TaskList from '../components/TaskList'
import ModalTask from '../components/Modal'
import Header from '../components/header'


const initialState = {
   task: '',
   id: 0,
   completed: false,
}

const MainScreen = ({navigation}) => {

   const [list, setList] = useState([])
   const [input, setInput] = useState(initialState)
   const [modalVisible, setModalVisible] = useState(false)
   const [taskActive, setTaskActive] = useState({})

   const onPressTask = (task) => {
      setTaskActive(task)
      setModalVisible(!modalVisible)
   }

   const makeCompleted = (taskCompleted) => {
      const newTask = list.map((item, index) => {
         index === taskCompleted && (item.completed = !item.completed)
         return item;
      })
      setList(newTask)
   }

   const deleteTask = (taskDeleted) => {
      const taskToDelete = list.filter((item, index) => index !== taskDeleted)
      setList(taskToDelete)
   }

   return (
      <View style={styles.container}>
            <TopBar
               input={input}
               list={list}
               setList={setList}
               setInput={setInput}
               initialState={initialState}
            />
            <TaskList
               list={list}
               onPressTask={onPressTask}
               setList={setList}
               navigation={navigation}
            />
            <ModalTask
               modalVisible={modalVisible}
               setModalVisible={setModalVisible}
               taskActive={taskActive}
               makeCompleted={makeCompleted}
               deleteTask={deleteTask}
            />
      </View>
   )
}

export default MainScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
})


//{list.map(item =>
//   <View style={styles.task} key={item.id}>
//      <Text >{item.task}</Text>
//   </View>
//)}