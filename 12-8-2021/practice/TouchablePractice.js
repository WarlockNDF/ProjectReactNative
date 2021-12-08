import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,TextInput, Button} from 'react-native'

const TouchablePractice = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const checkInput = () => {
        if (!name.trim() || !email.trim()) {
            !name.trim() ? alert("Please Enter Name") : alert("Pleases Enter Email")  
        } else {
            alert("UserName : "+name+"\n"
            +"Password : "+email);  
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={checkInput}
                    style={{alignContent:'center',backgroundColor: 'pink'}}>
                        <View style={{alignItems:'center'}}>
                        <Text>SUBMIT</Text>
                        </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default TouchablePractice

const styles = StyleSheet.create({})

