import { useState } from "react";
import { View, StatusBar, Button } from "react-native";

export default function StatusBarr(){
    const [hide, setHide] = useState(false)
    return(
        <View>
            <StatusBar 
            backgroundColor={'blue'}
            barStyle={'default'}
            hidden={hide}
            />
            <Button title="toggle statusBar" onPress={()=>setHide(!hide)}/>
        </View>
    )
}