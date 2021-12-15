import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlertExample from './componemt/alert/AlertExample';
import Footer from './componemt/Footer';
import ModalExample from './componemt/modal/ModalExample';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={{color:"red",marginBottom:15}}>USE EFFECT</Text>
      <Footer/> */}
      {/* <AlertExample/> */}
      <ModalExample/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
