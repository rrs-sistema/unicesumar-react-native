import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";

import Cabecalho from "./src/Cabecalho";
import Conteudo from "./src/Conteudo";
import Rodape from "./src/Rodape";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F3F3F3" />
      <View style={styles.container}>
        <Cabecalho />
        <Conteudo />
        <Rodape
          nome="Jullia Acsa - Rivaldo R. - Nicolas Brian"
          data="06/04/2026"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  container: {
    flex: 1,
  },
});