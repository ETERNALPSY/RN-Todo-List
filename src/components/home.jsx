import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const Home = ({newList, setNewList}) => {
   return (
      <View style={styles.home}>
         <Pressable
            style={styles.new}
            onPress={ () => setNewList(!newList )}
         >
            <Text style={styles.text}>Crear Nueva Lista</Text>
         </Pressable>
         <Image
            style={styles.img}
            resizeMode='cover'
            source={{uri:'https://picsum.photos/200'}}
         />
      </View>
   )
}

export default Home

const styles = StyleSheet.create({
   home:{
      flex:5,
      width:'100%',
      justifyContent:'space-around',
      alignItems:'center',
      backgroundColor:colors.navyBlue,
   },
   new:{
      backgroundColor:colors.red,
      padding:20,
      borderRadius:10
   },
   text:{
      fontSize:40,
      color:colors.white
   },
   img:{
      width:400,
      height:400,
      borderRadius:400,
   }
})