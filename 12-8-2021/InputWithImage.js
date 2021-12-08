import React from 'react'
import { StyleSheet, Text,Image, View , SafeAreaView,TextInput} from 'react-native'

const InputWithImage = () => {
    return (
        <SafeAreaView  style={{flex:1}}>
            <View style={styles.container}>
                <View style={styles.sectionStyle}>
                    <Image
                    source ={require('../../Images/input_username.png')}
                    style ={styles.imageStyle}
                    />
                    <TextInput
                    style={{flex:1}}
                    placeholder="Username"
                    underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.sectionStyle}>
                    <Image
                    source ={require('../../Images/input_phone.png')}
                    style ={styles.imageStyle}
                    />
                    <TextInput
                    style={{flex:1}}
                    placeholder="Enter Your Mobile Number Here"
                    underlineColorAndroid="transparent"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default InputWithImage

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
