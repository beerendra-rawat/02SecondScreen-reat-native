import { View, Text, StyleSheet, Pressable } from "react-native";

export default function PressableBtn(){
    return(
        <View style={styles.main}>
            <Pressable
            onPress={()=>alert("On Press")}
            onLongPress={()=>alert(" On Long press")}
            // onPressIn={()=>alert("On press in")}
            // onPressOut={()=>alert("on press out")}
            >
                <Text style={styles.pressableBtn}>PressableBtn</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressableBtn:{
        backgroundColor: 'green',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        fontSize: 20,
        shadowColor: 'black',
        color: "#fff",
        elevation: 5
    }
})