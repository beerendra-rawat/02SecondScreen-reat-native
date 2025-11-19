import { View, Text, ScrollView, SectionList } from "react-native";
import UserInput from "./Component/InputText";
import UserData from "./Component/UserData";
import FlatLists from "./Component/FlatLists";
import DynamicGrid from "./Component/DynmicGrid";
import SectionLists from "./Component/SectionList";
import ClassComponent from "./Component/ClassComponent";

function App() {
  return (
    <>
      <ScrollView style={{ marginBottom: 30 }}>
        {/* <View style={{ marginTop: 35 }}>
          <Text style={{ fontSize: 30, color: "blue" }}>Hello react-native user "It is a main file"</Text>
        </View>
        <UserInput />
        <UserData />
        <FlatLists />
        <DynamicGrid /> */}
        <SectionLists />
        {/* <ClassComponent /> */}


      </ScrollView>
    </>
  )
}
export default App;