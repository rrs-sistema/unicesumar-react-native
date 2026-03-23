import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.fundo}>

      {/* 🔴 Cabeçalho */}
      <View style={styles.cabecalho}>
        <Text style={styles.texto}>CABEÇALHO</Text>
      </View>

      {/* 🟢 Conteúdo */}
      <View style={styles.conteudo}>
        <Text style={styles.texto}>CONTEÚDO</Text>
      </View>

      {/* ⚫ Rodapé */}
      <View style={styles.rodape}>
        <Text style={styles.texto}>RODAPÉ</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#e0f7fa', // azul claro (igual ao exemplo)
  },

  cabecalho: {
    flex: 0.15, // 15%
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  conteudo: {
    flex: 0.75, // 75%
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rodape: {
    flex: 0.10, // 10%
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  texto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});