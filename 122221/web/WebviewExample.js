import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'

const WebviewExample = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WebView
                source={{
                    uri: 'https://www.tni.ac.th/home/'
                }}
            />
        </SafeAreaView>
    )
}

export default WebviewExample

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
    },
    activityIndicatorStyle: {
        flex: 1,
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
    },
});