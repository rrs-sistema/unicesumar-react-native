import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Conteudo from "./src/Conteudo";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Conteudo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87c7e2",
  },
});