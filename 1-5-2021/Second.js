import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Second = ({navigation,route}) => {

    const {name} = route.params;

    return (
        <View style={styles.cotainer}>
            <Text style={{fontSize:20}}>React Native Pass Value From One Screen</Text>
            <Text style={{fontSize:12,marginTop:15}}>Value Pass From First : {name}</Text>
            <Button
            title='Go Back To First'
            onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default Second

const styles = StyleSheet.create({
    cotainer:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    }
})