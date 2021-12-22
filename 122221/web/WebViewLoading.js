import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native'
import WebView from 'react-native-webview';

const WebViewLoading = () => {

    const [isLoad, setLoad] = React.useState(false);

    const ActivityIndicatorImpl = () => {
        return (
            <View style={styles.activityIndicatorStyle}>
                <ActivityIndicator
                    color={"#007bff"}
                    size={"large"}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <WebView
                    source={{
                        uri: 'https://www.kmitl.ac.th/'
                    }}
                    javaScriptEnabled={true}
                    onLoadStart={() => setLoad(!isLoad)}
                    onLoadEnd={() => setLoad(!isLoad)}
                />
                {isLoad?<ActivityIndicatorImpl/>:null}
            </View>
        </SafeAreaView>
    )
}

export default WebViewLoading

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