import { StyleSheet, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import TaskList from '../components/TaskList'
import ModalTask from '../components/Modal'

const initialState = {
   task: '',
   completed: false,
}

const MainScreen = () => {

   const [list, setList] = useState([])
   const [input, setInput] = useState(initialState)
   const [modalVisible, setModalVisible] = useState(false)
   const [taskActive, setTaskActive] = useState({})

   //const onAddTask = () => {
   //   setList([...list, {
   //      id: list.length + 1,
   //      task: input,
   //      completed: false
   //   }])
   //}

   const onPressTask = (task) => {
      setTaskActive(task)
      setModalVisible(!modalVisible)
   }

   const makeCompleted = (taskModal) => {
      const newTask = list.map((item) => {
         item.task === taskModal && (item.completed = !item.completed)
         return item;
      })
      setList(newTask)
   }

   const deleteTask = (taskDeleted) => {
      const taskToDelete = list.filter((item) => item.task != taskDeleted)
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