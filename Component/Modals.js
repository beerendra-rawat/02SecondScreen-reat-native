import { useState } from "react";
import { View, Modal, Button, Text, StyleSheet } from "react-native";

export default function Modals(){
    const [showModal, setShowModal] = useState(false)
    return(
        <View style={styles.main}> 
            <Modal transparent={true} 
            visible={showModal}
            animationType="slide">
                <View style={styles.centerView}>
                    <View style={styles.modalView}>
                        <Text style={styles.Text}>This is dilog box</Text>
                        <Button title="Close Modal" onPress={()=>setShowModal(false)} />
                    </View>
                </View>
            </Modal>
            <View style={styles.buttonView}>
                <Button title="Open Modal" onPress={ () => setShowModal(true) } />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        flex: 1,
        marginTop: 15
    },
    buttonView:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    centerView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView:{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        borderColor: 'black',
        elevation: 2,
    },
    Text:{
        fontSize: 30,
        marginBottom: 15
    }
})