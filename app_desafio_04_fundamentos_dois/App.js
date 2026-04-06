import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { Colors } from "./src/theme/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});