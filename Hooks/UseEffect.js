import { useEffect, useState } from "react"
import { Button, Text, View } from "react-native"

export default function UseEffect(){
    const [count, setCount] = useState(0)

    const [show, setShow] = useState(true)

    useEffect(()=>{
        console.log("Component Mounted");

        return () => console.log("Component Unmounted");

    },[])

    useEffect(() => {
    console.log("Count Updated:", count);
  }, [count]);
    return(
        <View>
            <Text style={{fontSize: 22}}>Counter value: {count}</Text>
            <Button title="Increase" onPress={()=>setCount(count +1)}/>

                <View style={{marginTop: 15, marginBottom: 15}}>
                    <Button color={'green'} title="toggle button"
                    onPress={() => setShow(!show)}/>
                </View>
                {/* <View>
                    <Button title="Hide" onPress={() => setShow(false)}/>
                </View> */}
                {
                    show ? <HideShow /> : null
                }
        </View>
    )
}


const HideShow = () =>{
    useEffect(()=>{
    return () => console.log("Component Unmounted when component hide");
  })
    return(
        <View style={{marginTop: 25, padding:15, backgroundColor: "gray"}}>
            <Text>Hide and show component</Text>
        </View>
    )
}