import { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Student from "./Student";

class ClassComponent extends Component{
    fruits = () =>{
        alert("Apple");
    }
    constructor(){
        super();
        this.state ={
            name: "Beerendra",
            age: 24
        }
    }
    updateName(val){
        this.setState({name: val})
    }
    render(){
        return(
            <View>
                <Text style={{fontSize: 25, color: "blue"}}>This is class Component</Text>
                <Text style={{fontSize: 15}}>{this.state.name} {this.state.age}</Text>
                <Button title="function call" onPress={this.fruits}/>
                <TextInput
                style={{borderWidth: 2, borderColor: 'blue', marginTop: 10}}
                placeholder="Enter the name"
                onChangeText={(text)=>this.updateName(text)}
                />


                <Student name={this.state.name} />
            </View>

            
        )
    }
}
export default ClassComponent;