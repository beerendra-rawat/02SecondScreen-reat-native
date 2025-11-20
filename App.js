import { View, Text, ScrollView, SectionList, TouchableHighlight } from "react-native";
import UserInput from "./Component/InputText";
import UserData from "./Component/UserData";
import FlatLists from "./Component/FlatLists";
import DynamicGrid from "./Component/DynmicGrid";
import SectionLists from "./Component/SectionList";
import ClassComponent from "./Component/ClassComponent";
import UseEffect from "./Hooks/UseEffect";
import Flex from "./Component/Flex";
import TouchableBtn from "./Component/TuchableHighlightBtn";
import RadioBtn from "./Component/RadioBtn";
import ActivityIndicators from "./Component/ActivityIndicators";
import Modals from "./Component/Modals";
import PressableBtn from "./Component/PressableBtn";


function App() {
  return (
    <View style={{flex: 1}}>
      {/* <Modals /> */}
      <PressableBtn />
    </View>
  )
}
export default App;