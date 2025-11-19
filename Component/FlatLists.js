import { View, Text, FlatList, ScrollView } from "react-native";

export default function FlatLists() {
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
    const fruits = ["Apple", "Banana", "Mango", "Papaya"]
    return (
        <View>
            <Text style={{ fontSize: 18, marginTop: 10 }}>Now we are use FlatList</Text>
            <ScrollView>
                <FlatList
                    data={user}
                    renderItem={({ item }) => <Text style={{ fontSize: 18 }}>{item.name}</Text>}
                />
            </ScrollView>
            <Text style={{ fontSize: 18 }}>We are get fruits name using flatlist </Text>
            {/* <FlatList 
            data={fruits}
            renderItem={({item}) => <Text style={{fontSize: 18}}>{item}</Text>}
            /> */}

            {fruits.map((item, index) => (<Text>{item}</Text>))}
        </View>
    )
}