import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View style={styles.cotainer}>
            <Button title="มาดูใจหัวใจเราสิ อิอิ"
            onPress={() => navigation.navigate('About')}/>
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
