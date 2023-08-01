import {View, StyleSheet, SafeAreaView} from 'react-native';
import Home from "./src/screens/home";
import { StatusBar } from "expo-status-bar";


export default function App() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style='auto' translucent backgroundColor='transparent' />
        <Home />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'blue',
    },

});
