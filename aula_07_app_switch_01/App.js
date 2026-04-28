import React, { useState } from 'react';
import { View, Text, Switch, Image, StyleSheet, SafeAreaView } from 'react-native';

function App() {
  const imgSol = require('./src/img/sol.png');
  const imgLua = require('./src/img/lua-01.jpg');

  const [modoAtivo, setModoAtivo] = useState(false);

  const tema = modoAtivo
    ? {
      fundo: '#1E1E1E',
      textoPrincipal: '#FFFFFF',
      textoSecundario: '#E6E6E6',
      trackTrue: '#8EDAD3',
      thumb: '#0FA39A',
      imagem: imgLua,
      tituloModo: 'Modo Noturno',
    }
    : {
      fundo: '#F2F2F2',
      textoPrincipal: '#111111',
      textoSecundario: '#222222',
      trackTrue: '#8EDAD3',
      thumb: '#F4F3F4',
      imagem: imgSol,
      tituloModo: 'Modo Claro',
    };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: tema.fundo }]}>
      <View style={styles.topo}>
        <View style={styles.linhaSwitch}>
          <Text style={[styles.textoModo, { color: tema.textoPrincipal }]}>
            {tema.tituloModo}
          </Text>

          <Switch
            value={modoAtivo}
            onValueChange={(valor) => setModoAtivo(valor)}
            trackColor={{ false: '#B8B8B8', true: tema.trackTrue }}
            thumbColor={modoAtivo ? tema.thumb : '#F4F3F4'}
          />
        </View>

        <Text style={[styles.subtitulo, { color: tema.textoSecundario }]}>
          Componente Switch
        </Text>
      </View>

      <View style={styles.areaImagem}>
        <Image
          source={tema.imagem}
          style={modoAtivo ? styles.imagemNoturna : styles.imagemClara}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  topo: {
    alignItems: 'center',
  },

  linhaSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  textoModo: {
    fontSize: 24,
    fontWeight: '700',
    marginRight: 10,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: '600',
  },

  areaImagem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 35,
  },

  imagemClara: {
    width: 45,
    height: 45,
  },

  imagemNoturna: {
    width: 45,
    height: 45,
  },
});