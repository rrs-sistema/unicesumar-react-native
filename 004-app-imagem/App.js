import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>

      {/* Ilustração */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/logo-faca-festa.jpeg')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Texto */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Bem-vindo(a) ao Faça a Festa! 🎉
        </Text>

        <Text style={styles.description}>
          O Faça a Festa é o aplicativo ideal para organizar seu evento com
          praticidade e eficiência. Gerencie convidados, controle seu orçamento,
          acompanhe fornecedores e compartilhe todas as informações importantes
          com seus convidados em um só lugar.
        </Text>

        <Text style={styles.description}>
          Seja aniversário, chá de bebê, Natal ou Ano Novo, aqui você planeja
          cada detalhe da sua festa de forma simples, moderna e organizada.
        </Text>
      </View>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>Pular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextText}>Começar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: 'space-between',
  },

  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 250,
    height: 250,
  },

  textContainer: {
    flex: 2,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#222',
    marginBottom: 15,
  },

  description: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },

  skipButton: {
    borderWidth: 1,
    borderColor: '#2F6BFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },

  skipText: {
    color: '#2F6BFF',
    fontWeight: '500',
  },

  nextButton: {
    backgroundColor: '#2F6BFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },

  nextText: {
    color: '#fff',
    fontWeight: '600',
  },
});