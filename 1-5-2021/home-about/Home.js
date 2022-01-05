import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Home = ({navigation}) => {

    const testRouteParam = "me@loveyou.heart";

    return (
        <View style={styles.cotainer}>
            <Ionicons name="ios-heart" size={50} color="pink" />
            <Button title="มาดูใจหัวใจเราสิ อิอิ"
            onPress={() => navigation.navigate('About',{email:testRouteParam})}/>
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
