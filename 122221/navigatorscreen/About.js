import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const About = () => {
    return (
        <View style={styles.cotainer}>
            <Text>มันคงจะดีนะถ้าได้อยู่ข้างๆเธอ</Text>
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
