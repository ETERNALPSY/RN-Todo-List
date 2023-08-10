import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import AddButton from '../components/AddButton'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch } from 'react-redux'
import { saveImage } from '../features/user/userSlice'
import * as MediaLibrary from 'expo-media-library'


const SelectImage = ({ navigation }) => {

   const [image, setImage] = useState()
   const dispatch = useDispatch()

   const verifyCameraPermissions = async () => {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync()
      if (!granted) {
         return false
      }
      return true
   }

   const pickImage = async () => {
      const isCameraOk = await verifyCameraPermissions()
      if (isCameraOk) {
         let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
         })
         if (!result.canceled) {
            setImage(result.assets[0].uri)
         }
      }
   }

   const confirmImage = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync()
      if (status === "granted") {
         const response = await MediaLibrary.createAssetAsync(image)
         dispatch(saveImage(response.uri))
         console.log(response.uri)
      }
      navigation.goBack()
   }

   return (
      <View style={styles.container}>
         {image ? (
            <>
               <Image source={{ uri: image }} style={styles.image} />
               <AddButton title="Repetir" onPress={pickImage} />
               <AddButton title="Confirmar Foto" onPress={confirmImage} />
            </>
         ) : (
            <>
               <View style={styles.noPhotoContainer}>
                  <Text style={styles.text}>Toma una Foto</Text>
               </View>
               <AddButton title="Cámara" onPress={pickImage} />
            </>
         )}
      </View>
   )
}

export default SelectImage

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.navyBlue,
      paddingTop: 50,
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 50,
   },
   image: {
      width: 300,
      height: 300,
      borderWidth: 3,
      borderColor: colors.blue,
   },
   noPhotoContainer: {
      width: 300,
      height: 300,
      borderRadius: 10,
      borderWidth: 3,
      backgroundColor: colors.blue,
      borderColor: colors.red,
      justifyContent: "center",
      alignItems: "center",
   },
   text: {
      color: colors.white,
      fontSize: 30
   }
})