import { Text, View, StyleSheet, SectionList } from "react-native";

export default function SectionLists(){
    const data = [
        {
            title: "Fruits",
            data: ["Apple", "Banana", "Mango"],
        },
        {
            title: "Vegetables",
            data: ["Potato", "Tomato", "Carrot"],
        },
    ];

    return(
        <View>
            <Text style={styles.Taxt}>Now we are learn SectionList</Text>
            <SectionList
            sections={data}
            renderItem={({item}) => (<Text style={styles.item}>{item}</Text>)}
            renderSectionHeader={({section}) => (<Text style={styles.header}>{section.title}</Text>)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Taxt:{
        fontSize: 25,
        marginTop: 35
    },
    header: {
        backgroundColor: "#ddd",
        padding: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
    item: {
        fontSize: 16,
        padding: 10,
    },
})