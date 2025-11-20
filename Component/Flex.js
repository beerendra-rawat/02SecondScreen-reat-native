
import { View, StyleSheet } from "react-native";

export default function Flex() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.box1}></View>

        </View>
    );
}

const styles = StyleSheet.create({
    box1: {
        backgroundColor: "green",
        flex: 1
    }
});
