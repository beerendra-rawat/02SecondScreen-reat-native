import { useState, useSyncExternalStore } from "react";
import { View, ActivityIndicator, Button } from "react-native";

export default function ActivityIndicators(){
    const [show, setShow] = useState(false)

    const LoaderBtn =() =>{
        setShow(true)
    }
    setTimeout(()=>{
        setShow(false)
    },3000)
    return(
        <View>
            <ActivityIndicator size={'large'} color={'green'} animating={show} />
            <Button title="Loader Btn" onPress={LoaderBtn} />
        </View>
    )
}