import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Home = ({navigation}) => {

    const [text,setText] = React.useState("");

    return (
        <View style={styles.cotainer}>
            <Text style={{fontSize:20}}>React Native Pass Value From One Screen</Text>
            <Text style={{fontSize:12,marginTop:15}}>Please Enter Your Name To Pass To Second Screen</Text>
            <TextInput style={{marginTop:20,marginBottom:15}} 
            placeholder='Name Input'
            onChangeText={(inp) => setText(inp)}
            />
            <Button title='Press Me'
            onPress={() => {
                navigation.navigate('Second',{name: text})
            }}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    cotainer:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    }
})