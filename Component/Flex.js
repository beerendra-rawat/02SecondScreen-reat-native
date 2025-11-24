
import { View, StyleSheet } from "react-native";

export default function Flex() {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 1, backgroundColor: "green" }}></View>
            <View style={{ flex: 2, flexDirection: 'row' }}>
                <View style={{ flex: 1, backgroundColor: "red" }}></View>
                <View style={{ flex: 1, backgroundColor: "blue" }}></View>
                <View style={{ flex: 1, backgroundColor: "cyan" }}></View>
            </View>
        </View>
        
    );
}