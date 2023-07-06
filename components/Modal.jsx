import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'

const ModalTask = ({ modalVisible, setModalVisible, taskActive, makeCompleted, deleteTask }) => {
   return (
      <Modal
         animationType='fade'
         transparent={true}
         visible={modalVisible}
         onRequestClose={() => {
            setModalVisible(!modalVisible);
         }}>
         <View style={styles.centeredView}>
            <View style={styles.modalView}>
               <Text style={styles.modalText}>{taskActive.task}</Text>
               <View style={styles.buttonContainer}>
                  <Pressable
                     style={[styles.button, taskActive.completed ? styles.buttonDone : styles.buttonNotYet]}
                     onPress={() => {makeCompleted(taskActive.task)
                        setModalVisible(!modalVisible)}}
                  >
                     <Text style={styles.textStyle}>{taskActive.completed ? 'Marcar como pendiente' : 'Marcar como completa'}</Text>
                  </Pressable>

                  <Pressable
                     style={[styles.button, styles.buttonDelete]}
                     onPress={() => {deleteTask(taskActive.task)
                        setModalVisible(!modalVisible)}}>
                     <Text style={styles.textStyle}>Eliminar</Text>
                  </Pressable>

                  <Pressable
                     style={[styles.button, styles.buttonClose]}
                     onPress={() => setModalVisible(!modalVisible)}>
                     <Text style={styles.textStyle}>Cancelar</Text>
                  </Pressable>
               </View>
            </View>
         </View>
      </Modal>
   )
}

export default ModalTask

const styles = StyleSheet.create({
   centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
   },
   modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
   },
   button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
   },
   buttonClose: {
      backgroundColor: '#2196F3',
   },
   buttonDone: {
      backgroundColor: '#5C8984',
   },
   buttonNotYet: {
      backgroundColor: '#FF2E63',
   },
   buttonDelete: {
      backgroundColor: '#EE2B47',
   },
   textStyle: {
      fontSize: 25,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
   },
   modalText: {
      fontSize:40,
      marginBottom: 15,
      textAlign: 'center',
   },
   buttonContainer: {
      gap:10,
      justifyContent: 'space-between',
      alignItems: 'center'
   }
})