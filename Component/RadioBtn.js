import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RadioBtn(){
    const [radio, setRadio] = useState(1)
    return(
        <View style={styles.main}>
            <TouchableOpacity onPress={()=>setRadio(1)}>
                <View style={styles.RadioWrapper}>
                    <View style={styles.Radio}>
                        {
                            radio === 1 ? <View style={styles.RadioBg}></View> : null
                        }
                    </View>
                    <Text style={styles.RadioText}>Radio 1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setRadio(2)}>
                <View style={styles.RadioWrapper}>
                    <View style={styles.Radio}>
                        {
                            radio === 2 ? <View style={styles.RadioBg}></View> : null
                        }
                    </View>
                    <Text style={styles.RadioText}>Radio 1</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    RadioText:{
        fontSize: 20
    },
    Radio:{
        height: 40,
        width: 40,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
    },
    RadioBg:{
        height: 28,
        width: 28,
        backgroundColor: 'black',
        borderRadius: 20,
        margin: 4
        
    },
    RadioWrapper:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})