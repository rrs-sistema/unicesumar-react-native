import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';

function App() {

  const paises = [
    "BRL - Brasil",
    "ESP - Espanha",
    "MEX - México",
    "AUS - Austrália",
    "GER - Alemanha",
    "FRA - França",
    "ARG - Argentina",
    "POR - Portugal",
    "CAN - Canadá",
    "BEL - Bélgica",
    "CRO - Croácia"
  ];

  return (
    <ImageBackground
      source={require('./assets/bandeira-brasil.jpg')}
      style={styles.background}
      resizeMode="cover"
      blurRadius={2}
    >

      {/* Título */}
      <Text style={styles.titulo}>
        TOP 10 SELEÇÕES FARORITAS A CAMPEÃ DA COPA
      </Text>

      {/* Área com Scroll */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {paises.map((pais, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.texto}>
              {index + 1} ⚽ {pais}
            </Text>
          </View>
        ))}
      </ScrollView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 20,
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 6,
    textAlign: 'center'
  },

  scroll: {
    width: "100%"
  },

  scrollContainer: {
    alignItems: "center",
    paddingBottom: 40
  },

  card: {
    backgroundColor: "rgba(0,100,0,0.85)",
    marginVertical: 6,
    padding: 14,
    borderRadius: 14,
    width: 300,
    borderWidth: 2,
    borderColor: "#FFD700",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 2 }
  },

  texto: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center"
  }

});

export default App;