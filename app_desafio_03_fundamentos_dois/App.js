import React from "react";
import { View, StyleSheet } from "react-native";

import Cabecalho from "./src/Cabecalho";
import Conteudo from "./src/Conteudo";
import Rodape from "./src/Rodape";

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho imagem={require("./assets/mundo.png")} />
      <Conteudo />
      <Rodape
        nome="Jullia Acsa - Rivaldo R. - Nicolas Brian"
        data="30/03/2026"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});