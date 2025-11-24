import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Student extends Component{
    render(){
        return(
            <View style={styles.main}>
                <Text style={styles.text}>Student Component, passing data with the help of props</Text>
                <Text>name is: {this.props.name}</Text>
            </View>
        )
    }
}
export default Student;

const styles = StyleSheet.create({
    main:{
        backgroundColor: "yellow"
    },
    text:{
        fontSize: 35,
    }
})