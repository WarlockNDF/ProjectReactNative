import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './componemt/122221/navigatorscreen/stackExercise/Home';
//import About from './componemt/122221/navigatorscreen/About';
import Second from './componemt/122221/navigatorscreen/stackExercise/Second';


const Stack = createNativeStackNavigator();
// import WebviewExample from './componemt/122221/web/WebviewExample';
// import WebViewLoading from './componemt/122221/web/WebViewLoading';
// import AlertExample from './componemt/alert/AlertExample';
// import Footer from './componemt/Footer';
// import ModalExample from './componemt/modal/ModalExample';

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <Text style={{color:"red",marginBottom:15}}>USE EFFECT</Text>
    //   <Footer/> */}
    //   {/* <AlertExample/> */}
    //   {/* <ModalExample/> */}
    //   <WebviewExample/>
    //   <StatusBar style="auto" />
    // </View>
    // <WebviewExample/>
    // <WebViewLoading/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerStyle:{
            backgroundColor:"#62D0F9",
          },
          headerTintColor:"#FFFFFF"
        }}>
          <Stack.Screen name='Home'component={Home} options={{title:"Home"}}/>
          <Stack.Screen name='Second'component={Second} options={{title:"Second Page"}}/>
        </Stack.Navigator>
      </NavigationContainer>
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
