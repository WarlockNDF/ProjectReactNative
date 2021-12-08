import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

const TextInputPractice1 = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const checkInput = () => {
        if (!name.trim() || !email.trim()) {
            !name.trim() ? alert("Please Enter Name") : alert("Pleases Enter Email")  
        } else {
            alert("Success")  
        }
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View>
                <TextInput
                    placeholder="Please Input Name"
                    underlineColorAndroid="transparent"
                    onChangeText={(name) => setName(name)}
                />
                <TextInput
                    placeholder="Please Input Email"
                    underlineColorAndroid="transparent"
                    onChangeText={(mail) => setEmail(mail)}
                />
                <Button
                onPress={checkInput}
                title='SUBMIT'
                />
            </View>
        </SafeAreaView>
    )
}

export default TextInputPractice1

const styles = StyleSheet.create(StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    }, imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    }
}));