import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Text } from "react-native";

export default function UserInput(){
    const [name, setName] = useState("")
    return(
        <View>
            <Text style={styles.Text}>Input box value is: {name}</Text>
            <TextInput 
            style={styles.InputBox}
            placeholder="Enter the user name..."
            onChangeText={(text)=>setName(text)}
            value={name}
            />
            <Button title="Clear text" onPress={()=>setName("")}/>
        </View>
    )
}
const styles = StyleSheet.create({
    InputBox:{
        borderWidth: 2,
        borderColor: "green",
        margin: 5,
        fontSize: 18
    },
    Text:{
        fontSize: 18
    }
})