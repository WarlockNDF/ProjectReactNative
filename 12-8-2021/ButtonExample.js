import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

const ButtonExample = () => {


    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Button
                onPress={() =>alert("hello")}
                title="Click Me!"
                color="#0000ff"
                />
            </View>
        </SafeAreaView>
    )
}

export default ButtonExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
