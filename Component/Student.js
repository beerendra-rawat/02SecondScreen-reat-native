import { Component } from "react";
import { View, Text } from "react-native";

class Student extends Component{
    render(){
        return(
            <View>
                <Text style={{fontSize: 25}}>Student Component, passing data with the help of props</Text>
                <Text>name is: {this.props.name}</Text>
            </View>
        )
    }
}
export default Student;