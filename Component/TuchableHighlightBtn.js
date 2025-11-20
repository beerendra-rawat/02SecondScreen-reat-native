import { Text, TouchableHighlight, View, StyleSheet } from "react-native";

export default function TouchableBtn(){
    return(
        <View style={styles.main}>
            <TouchableHighlight>
                <Text style={styles.Button}>button</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.Button, styles.Success]}>Success</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.Button, styles.Primary]}>Primary</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.Button, styles.Warning]}>Warning</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.Button, styles.Error]}>Error</Text>
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        flex: 1
    },
    Button:{
        backgroundColor: '#bbb',
        color: '#fff',
        fontSize: 24,
        padding: 10,
        textAlign: 'center',
        margin: 10,
        borderRadius: 10,
        shadowColor: "green",
        elevation: 10,
    },
    Success:{
        backgroundColor: 'green'
    },
    Primary:{
        backgroundColor: "blue"
    },
    Warning:{
        backgroundColor: 'gold'
    },
    Error:{
        backgroundColor: 'red'
    }
})