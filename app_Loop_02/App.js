import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

function App() {

  const jogadores = [
    "Goleiro-------: Alisson",
    "Lateral Dir.--: - Danilo",
    "Zagueiro------: - Marquinhos",
    "Zagueiro------: - Thiago Silva",
    "Lateral Esq.--: - Alex Sandro",
    "Volante-------: - Casemiro",
    "Meia----------: - Lucas Paquetá",
    "Meia----------: - Neymar",
    "Ponta Dir.----: - Raphinha",
    "Centroavante--: - Richarlison",
    "Ponta Esq-----:. - Vinícius Jr"
  ];

  let elementos = null;

  for (let i = 0; i < jogadores.length; i++) {
    elementos = (
      <>
        {elementos}

        <View
          style={{
            backgroundColor: "rgba(30,136,229,0.9)",
            marginVertical: 6,
            padding: 12,
            borderRadius: 10,
            width: 280,
            elevation: 5
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            {i + 1} ⚽ {jogadores[i]}
          </Text>
        </View>

      </>
    );
  }

  return (
    <ImageBackground
      source={require('./assets/bandeira-brasil.jpg')}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
      }}
      resizeMode="cover"
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: "white",
          marginBottom: 20,
          textShadowColor: "black",
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 5
        }}
      >
        🇧🇷 Escalação da Seleção
      </Text>

      {elementos}

    </ImageBackground>
  );
}

export default App;