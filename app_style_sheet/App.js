import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.fundo}>

      {/* 🔴 CABEÇALHO */}
      <View style={styles.cabecalho}>

        {/* 👤 ESQUERDA (imagem + nome) */}
        <View style={styles.infoUsuario}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
            style={styles.avatar}
          />

          <Text style={styles.nome}>
            Nome Sobrenome
          </Text>
        </View>

        {/* 📱 DIREITA */}
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/159/159832.png' }}
          style={styles.iconeDireita}
        />

      </View>

      {/* 🟢 CONTEÚDO */}
      <View style={styles.conteudo}>
        <Text>CONTEÚDO</Text>
      </View>

      {/* ⚫ RODAPÉ */}
      <View style={styles.rodape}>
        <Text style={{ color: '#fff' }}>RODAPÉ</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#e0f7fa',
  },

  cabecalho: {
    flex: 0.15,
    backgroundColor: '#fff',
    flexDirection: 'row', // 🔥 horizontal
    alignItems: 'center', // central vertical
    justifyContent: 'space-between', // separa esquerda e direita
    paddingHorizontal: 20,
  },

  infoUsuario: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 50,
    height: 50,
  },

  nome: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },

  iconeDireita: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
  },

  conteudo: {
    flex: 0.75,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rodape: {
    flex: 0.10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});