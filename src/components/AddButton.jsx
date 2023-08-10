import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const AddButton = ({ title, onPress}) => {

   return (
      <Pressable
         style={styles.button}
         onPress={onPress}
      >
         <Text style={styles.text}>{title}</Text>
      </Pressable>
   );
};

export default AddButton;

const styles = StyleSheet.create({
   button: {
      width:'90%',
      backgroundColor: colors.red,
      padding: 20,
      borderRadius: 10,
   },
   text: {
      textAlign:'center',
      fontSize: 35,
      color: colors.white,
   },
});
