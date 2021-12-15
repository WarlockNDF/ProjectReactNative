import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Alert,
    SafeAreaView,
    Button
}
    from 'react-native'

const AlertExample = () => {

    const simpleHandler = () =>{
        alert("Hello")
    }

    const twoOptionHandler = () =>{
        Alert.alert(
            "Two Option",
            "I am two option alert, Do you wanna cancel Me ?",
            [
                {
                    text:"YES",
                    onPress : () => console.log("YES OP 2")
                },
                {
                    text:"No",
                    onPress : () => console.log("No OP 2")
                }
            ],
            {cancelable:false}
        );
    }

    const ThreeOptionHandler = () =>{
        Alert.alert(
            "Three Option",
            "Wanna Go Three Option",
            [
                {
                    text:"YES",
                    onPress : () => console.log("YES OP 3")
                },
                {
                    text:"MayBe",
                    onPress : () => console.log("MayBe OP 3")
                },
                {
                    text:"No",
                    onPress : () => console.log("No OP 3")
                }
            ],
            {cancelable:true}
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Button
                    title='Simple Alert'
                    onPress={simpleHandler}
                />
                                <Button
                    title='Alert two Option'
                    onPress={twoOptionHandler}
                />
                                <Button
                    title='Alert with Three Option'
                    onPress={ThreeOptionHandler}
                />
            </View>
        </SafeAreaView>
    )
}

export default AlertExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})