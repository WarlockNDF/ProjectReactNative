import React from 'react'
import { View, Text,StyleSheet,Button } from 'react-native'

const About = ({navigation,route}) => {

    const {email} = route.params;

    return (
        <View style={styles.cotainer}>
            <Text>มันคงจะดีนะถ้าได้อยู่ข้างๆเธอ {email}</Text>
            <Button title='มาดูอีกสิ'
            onPress={() => navigation.push('About',{email:"EIEI"})}
            />
            <Button
            title='กลับไปอิอิ'
            onPress={() => navigation.goBack()}
            />
            <Button
            title='ไป Top Stack อิอิ'
            onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    cotainer:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    }
})
