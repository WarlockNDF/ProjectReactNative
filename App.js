import React, { useState, useMemo, useCallback } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  SafeAreaView,
  RefreshControl
} from 'react-native';


const Landing = () => {

  const [textvalue,setText] = useState('');
  const checkNumber = ()=>{
    isNaN(textvalue) ? alert("It Not A Number") : alert("Is Is A Number");
  }

  return (
      <SafeAreaView style = {styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Text Input"
        onChangeText={(textvalue) => setText(textvalue)}
        />
        <Button
        title="Check Value is Number or Not"
        onPress={checkNumber}
        />
      </SafeAreaView>
  );

};

const styles = StyleSheet.create({
   container: {
   flex: 1,
   alignItems:"center",
   marginTop:60
   },
   input:{
     height:40,
     width:'70%',
     marginBottom:10
   }
   });

export default Landing;