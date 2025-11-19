import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function DynamicGrid() {
    const user = [
        {
            id: 1,
            name: "Beerendra"
        },
        {
            id: 2,
            name: "Niraj"
        },
        {
            id: 3,
            name: "Pankaj"
        },
        {
            id: 4,
            name: "Gaurav"
        },
        {
            id: 1,
            name: "Beerendra"
        },
        {
            id: 2,
            name: "Niraj"
        },
        {
            id: 3,
            name: "Pankaj"
        },
        {
            id: 4,
            name: "Gaurav"
        },
    ]
    return (
        <View>
            <Text style={styles.Text}>Grid with Dynamic Data</Text>
            <ScrollView>
                <View style={{flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
                    {user.map((item)=><Text style={styles.item}>{item.name}</Text>)}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 25,
        marginTop: 35
    },
    item:{
        fontSize: 25,
        backgroundColor: "blue",
        margin: 5,
        padding: 5,
        width: 120,
        height: 120,
        textAlignVertical: 'center',
        textAlign: 'center'
    }
})