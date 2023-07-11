import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopBar from '../components/TopBar'
import TaskList from '../components/TaskList'
import ModalTask from '../components/Modal'
import Header from '../components/header'
import { useFonts } from 'expo-font'
import Home from '../components/home'


const initialState = {
   task: '',
   id: 0,
   completed: false,
}

const MainScreen = () => {

   const [fontsLoaded] = useFonts({
      'Josefin': require('../../assets/JosefinSans/JosefinSans-Regular.ttf')
   })

   const [list, setList] = useState([])
   const [input, setInput] = useState(initialState)
   const [modalVisible, setModalVisible] = useState(false)
   const [taskActive, setTaskActive] = useState({})
   const [newList, setNewList] = useState(false)

   if (!fontsLoaded) {
      return null
   }

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
         <Header />
         {
            newList
               ? <>
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
                     newList={newList}
                     setNewList={setNewList}
                  />
                  <ModalTask
                     modalVisible={modalVisible}
                     setModalVisible={setModalVisible}
                     taskActive={taskActive}
                     makeCompleted={makeCompleted}
                     deleteTask={deleteTask}
                  />
               </>
               : <Home
                  newList={newList}
                  setNewList={setNewList}
               />
         }
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