import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Poema extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        padding: 30,
        backgroundColor: 'purple'
      }}>
        <Text style={
          styles.texto
        }>Arquitetura do Invisível!</Text>
        <Text style={
          styles.
            textoSub
        }>
          <p>
            Entre linhas de código e silêncio,
            nasce o invisível que sustenta o mundo.
            <p style={{ fontFamily: 'Bernard MT Condensed', fontSize: 16 }}>Não é apenas lógica - é intenção.</p>

            Cada estrutura erguida na memória
            carrega sonhos que não aparecem na tela,
            mas respiram
            no toque de quem confia.

            <p style={{ fontFamily: 'sans-serif', fontStyle: 'italic' }}>Há beleza na precisão,</p>
            há poesia na arquitetura,
            há propósito em cada detalhe
            que ninguém vê —
            mas todos sentem.

            Construir é mais que compilar.
            É transformar ideia em presença,
            é dar forma ao intangível,
            é servir através da criação.

            E quando tudo funciona
            como se fosse simples,
            ali repousa o verdadeiro milagre:
            <p style={{ letterSpacing: 1.2, }}>
              o trabalho bem feito
              que fala sem ruído.</p></p>
        </Text>
        <Text style={
          styles.textoRodape
        }>Melhor equipe do mundo!!!</Text>
      </View>
    );

  }
}

export default Poema;

const styles = StyleSheet.create({
  texto: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 50,
  },
  textoSub: {
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a6c4c4',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 50,
  },
  textoRodape: {
    color: '#ffffffcc',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 50,
    textDecorationLine: 'underline'
  },
});
