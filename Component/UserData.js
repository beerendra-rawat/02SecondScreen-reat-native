import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function UserData() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [display, setDisplay] = useState(false)
    const ResetForm = () => {
        setDisplay(false)
        setName("");
        setPassword("");
        setEmail("");
    }
    return (
        <View>
            <Text style={styles.Text}>Data Entry Form</Text>
            <TextInput
                style={styles.InputBox}
                placeholder="Enter the name..."
                value={name}
                onChangeText={(Text) => setName(Text)}
            />
            <TextInput
                style={styles.InputBox}
                placeholder="Enter the password..."
                secureTextEntry={true}
                value={password}
                onChangeText={(Text) => setPassword(Text)}
            />
            <TextInput
                style={styles.InputBox}
                placeholder="Enter the email..."
                value={email}
                onChangeText={(Text) => setEmail(Text)}
            />
            <View style={styles.Button}>
                <Button title="Print Data"
                    onPress={() => setDisplay(true)}
                    color={"green"} />
            </View>
            <View>
                {display ? (
                    <View>
                        <Text>user name is : {name}</Text>
                        <Text>user password is: {password}</Text>
                        <Text>use email is: {email}</Text>
                    </View>
                )
                    : null}
            </View>
            <Button title="Clear Data" onPress={ResetForm} />
        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 18,
        margin: 10
    },
    InputBox: {
        borderWidth: 2,
        borderColor: "blue",
        margin: 5
    },
    Button: {
        marginBottom: 15,
    }
})