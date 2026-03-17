import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView
} from 'react-native';

function App() {

  const gerarIdade = () => Math.floor(Math.random() * (38 - 18 + 1)) + 18;

  const avatars = {
    vinicius: require('./assets/jogadores/vinicius-junior.jpg'),
    andrey_santos: require('./assets/jogadores/andrey_santos.jpeg'),
    casemiro: require('./assets/jogadores/casemiro.jpeg'),
    wesley: require('./assets/jogadores/wesley.jpeg'),
  };

  const jogadores = [

    { posicao: "Goleiro", nome: "Alisson", clube: "Liverpool", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Goleiro", nome: "Bento", clube: "Al-Nassr", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Goleiro", nome: "Ederson", clube: "Fenerbahçe", idade: gerarIdade(), avatar: 'vinicius' },

    { posicao: "Defensor", nome: "Alex Sandro", clube: "Flamengo", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Defensor", nome: "Bremer", clube: "Juventus", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Defensor", nome: "Danilo", clube: "Flamengo", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Defensor", nome: "Douglas Santos", clube: "Zenit", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Defensor", nome: "Gabriel Magalhães", clube: "Arsenal", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Defensor", nome: "Ibañez", clube: "Al-Ahli", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Defensor", nome: "Leo Pereira", clube: "Flamengo", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Defensor", nome: "Marquinhos", clube: "PSG", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Defensor", nome: "Wesley", clube: "Roma", idade: gerarIdade(), avatar: 'wesley' },

    { posicao: "Meia", nome: "Andrey Santos", clube: "Chelsea", idade: gerarIdade(), avatar: 'andrey_santos' },
    { posicao: "Meia", nome: "Casemiro", clube: "Manchester United", idade: gerarIdade(), avatar: 'casemiro' },
    { posicao: "Meia", nome: "Danilo", clube: "Botafogo", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Meia", nome: "Fabinho", clube: "Al-Ittihad", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Meia", nome: "Gabriel Sara", clube: "Galatasaray", idade: gerarIdade(), avatar: 'vinicius' },

    { posicao: "Atacante", nome: "Endrick", clube: "Lyon", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Atacante", nome: "Gabriel Martinelli", clube: "Arsenal", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Atacante", nome: "Igor Thiago", clube: "Brentford", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Atacante", nome: "João Pedro", clube: "Chelsea", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Atacante", nome: "Luiz Henrique", clube: "Zenit", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Atacante", nome: "Matheus Cunha", clube: "Manchester United", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Atacante", nome: "Raphinha", clube: "Barcelona", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Atacante", nome: "Rayan", clube: "Bournemouth", idade: gerarIdade(), avatar: 'vinicius' },
    { posicao: "Atacante", nome: "Vinicius Junior", clube: "Real Madrid", idade: gerarIdade(), avatar: 'vinicius' }

  ];

  return (

    <ImageBackground
      source={require('./assets/bandeira-brasil.jpg')}
      style={styles.background}
      resizeMode="cover"
      blurRadius={2}
    >

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>LAÇOS DE REPETIÇÃO</Text>

        <Image
          source={require('./assets/bandeira-brasil.jpg')}
          style={styles.logo}
        />

        <Text style={styles.subtitulo}>Convocados para a copa do mundo!</Text>
      </View>


      {/* LISTA COM SCROLL */}
      <ScrollView style={{ width: "100%" }}>

        {jogadores.map((jogador, index) => (
          <View key={index} style={styles.card}>

            <Image
              source={avatars[jogador.avatar]}
              style={styles.avatar}
            />

            <View>
              <Text style={styles.info}>
                Nome: <Text style={styles.bold}>{jogador.nome}</Text>
              </Text>

              <Text style={styles.info}>
                Clube: <Text style={styles.bold}>{jogador.clube}</Text>
              </Text>

              <Text style={styles.info}>
                Idade: <Text style={styles.bold}>{jogador.idade}</Text>
              </Text>
            </View>

          </View>
        ))}

      </ScrollView>


      {/* RODAPÉ */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Jullia Acsa - Nicolas Brian - Rivaldo R.</Text>
        <Text style={styles.footerText}>16/03/2026</Text>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    alignItems: "center"
  },

  header: {
    width: "100%",
    backgroundColor: "#a40000",
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 10
  },

  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  },

  logo: {
    width: 190,
    height: 90,
    marginVertical: 10
  },

  subtitulo: {
    color: "yellow",
    fontWeight: "bold"
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#77aeca",
    marginVertical: 6,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center"
  },

  avatar: {
    width: 60,
    height: 60,
    backgroundColor: "#6ea4bf",
    marginRight: 15
  },

  info: {
    fontSize: 14
  },

  bold: {
    fontWeight: "bold",
    fontSize: 16
  },

  footer: {
    width: "100%",
    backgroundColor: "#a40000",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12
  },

  footerText: {
    color: "yellow"
  }

});

export default App;