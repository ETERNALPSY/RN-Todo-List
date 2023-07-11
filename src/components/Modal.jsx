import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../global/colors';

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
                     onPress={() => {makeCompleted(taskActive.id)
                        setModalVisible(!modalVisible)}}
                  >
                     <Text style={styles.textStyle}>{taskActive.completed ? 'Marcar como pendiente' : 'Marcar como completa'}</Text>
                  </Pressable>

                  <Pressable
                     style={[styles.button, styles.buttonDelete]}
                     onPress={() => {deleteTask(taskActive.id)
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
      backgroundColor: colors.navyBlue,
   },
   buttonDone: {
      backgroundColor: colors.blue,
   },
   buttonNotYet: {
      backgroundColor: colors.blue,
   },
   buttonDelete: {
      backgroundColor: colors.red,
   },
   textStyle: {
      fontSize: 25,
      color: colors.white,
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