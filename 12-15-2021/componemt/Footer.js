import React, {useEffect} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const Footer = () => {

    const users = [
        {id:1,name:"john"},
        {id:2,name:"mary"}
    ]   

    const [count,setCount] = React.useState(1);
    const [title,setTitle] = React.useState("Tim");

    //ทุกรอบที่ Render
    useEffect(()=>{
        console.log("EveryChange");
    })

    //รอบเดียวจาก API
    useEffect(()=>{
        console.log("Initial");
    },[])

    //ทำเมื่อตัวแปรตัวนั้นเปลี่ยน
    useEffect(()=>{
        console.log("Change by var");
    },[title])


    return (
        <View>
            {users.map((user,idx) => {
                return <Text>#{idx} UserId:{user.id} Name:{user.name}</Text>
            })}
            <Text>Counter : {count}</Text>
            <Text style={{marginBottom:15}}>Title : {title}</Text>
            <Button title='Add counter' 
            onPress={() => setCount(count+1)}
            />
            <Button 
             title='ChangeName'
             onPress={() => setTitle("Hello")}
            />
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({})
