import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import defaultProfile from '../../assets/Images/defaultProfile.png'
import AddButton from '../components/AddButton'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'

const Profile = ({ navigation }) => {

   const { profileImage } = useSelector(state => state.userReducer.value)
   console.log(profileImage)

   const launchCamera = () => {
      navigation.navigate('SelectImage')
   }

   return (
      <View style={styles.container}>
         {
            profileImage ?
               <Image
                  source={{ uri: profileImage }}
                  style={styles.image}
                  resizeMode="cover"
               />
               : <Image
                  source={defaultProfile}
                  style={styles.image}
                  resizeMode="cover"
               />
         }

         <AddButton
            onPress={launchCamera}
            title="Editar Imagen de Perfil"
         />
         <AddButton
            onPress={() => { }}
            title="My address"
         />
      </View>
   )
}

export default Profile

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.navyBlue,
      justifyContent: 'space-evenly',
      alignItems: 'center',
   },
   image: {
      width: 300,
      height: 300,
      borderWidth: 3,
      borderColor: colors.red,
      borderRadius: 200,
      overflow: 'hidden'
   }
})