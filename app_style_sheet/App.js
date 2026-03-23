import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {

  const [cirurgia, setCirurgia] = useState(null); // null | true | false

  return (
    <View style={styles.container}>

      {/* 🔝 CABEÇALHO */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
            style={styles.avatar}
          />
          <Text style={styles.userName}>Acsa, Rivinha e Nicolas</Text>
        </View>

        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/747/747376.png' }}
          style={styles.iconRight}
        />
      </View>

      {/* 📜 CONTEÚDO */}
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>

        {/* CARD AZUL */}
        <View style={[styles.card, styles.blueCard]}>
          <Text style={styles.cardText}>📄 Ver carteirinha</Text>
          <Text style={styles.arrow}>›</Text>
        </View>

        {/* CARD COM BADGE */}
        <View style={[styles.card, styles.blueCard]}>
          <View style={styles.row}>
            <Text style={styles.cardText}>👥 Rede Amiga</Text>
            <Text style={styles.badge}>Novidade</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>

        {/* CARD AMARELO */}
        <View style={[styles.card, styles.yellowCard]}>
          <Text style={styles.cardText}>⭐ Barilife Plus (Em breve)</Text>
          <Text style={styles.arrow}>›</Text>
        </View>

        {/* MEDIDAS */}
        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Medidas</Text>
          <Text style={styles.infoText}>Peso: 150 kg</Text>
          <Text style={styles.infoText}>Altura: 190 cm</Text>
        </View>

        {/* CIRURGIA */}
        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>
            Já fez a Cirurgia Bariátrica?
          </Text>

          <View style={styles.opcoesContainer}>

            {/* BOTÃO SIM */}
            <TouchableOpacity
              style={[
                styles.botaoOpcao,
                cirurgia === true && styles.botaoSelecionado
              ]}
              onPress={() => setCirurgia(true)}
            >
              <Text
                style={[
                  styles.textoOpcao,
                  cirurgia === true && styles.textoSelecionado
                ]}
              >
                Sim
              </Text>
            </TouchableOpacity>

            {/* BOTÃO NÃO */}
            <TouchableOpacity
              style={[
                styles.botaoOpcao,
                cirurgia === false && styles.botaoSelecionado
              ]}
              onPress={() => setCirurgia(false)}
            >
              <Text
                style={[
                  styles.textoOpcao,
                  cirurgia === false && styles.textoSelecionado
                ]}
              >
                Não
              </Text>
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Cirurgia</Text>
          <Text style={styles.infoText}>
            Bypass / Gastroplastia em “Y de Roux”
          </Text>
          <Text style={styles.infoSub}>02/2017</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Hospital</Text>
          <Text style={styles.infoText}>
            HOSPITAL MARCELINO CHAMPAGNAT
          </Text>
        </View>

      </ScrollView>

      {/* 🔻 RODAPÉ */}
      <View style={styles.footer}>
        <Text>🏠 Início</Text>
        <Text>📍 Locais</Text>
        <Text style={styles.active}>👤</Text>
        <Text>🏥 Agenda</Text>
        <Text>☰ Menu</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f3f5',
  },

  /* HEADER */
  header: {
    height: 90,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    elevation: 3,
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 45,
    height: 45,
  },

  userName: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '600',
  },

  iconRight: {
    width: 25,
    height: 25,
  },

  /* BODY */
  body: {
    flex: 1,
    padding: 15,
  },

  card: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  blueCard: {
    backgroundColor: '#cfe2f3',
  },

  yellowCard: {
    backgroundColor: '#f9e79f',
  },

  cardText: {
    fontSize: 14,
    fontWeight: '500',
  },

  arrow: {
    fontSize: 20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  badge: {
    marginLeft: 10,
    backgroundColor: 'red',
    color: '#fff',
    fontSize: 10,
    paddingHorizontal: 6,
    borderRadius: 6,
  },

  opcoesContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  botaoOpcao: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },

  botaoSelecionado: {
    backgroundColor: '#2ecc71',
    borderColor: '#2ecc71',
  },

  textoOpcao: {
    color: '#333',
    fontWeight: '500',
  },

  textoSelecionado: {
    color: '#fff',
  },

  /* INFO CARDS */
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#2ecc71',
  },

  sectionTitle: {
    fontWeight: '600',
    marginBottom: 5,
    color: '#2ecc71',
  },

  infoText: {
    fontSize: 13,
    marginBottom: 3,
  },

  infoSub: {
    fontSize: 12,
    color: '#888',
  },

  /* FOOTER */
  footer: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5,
  },

  active: {
    backgroundColor: '#2e86de',
    color: '#fff',
    padding: 10,
    borderRadius: 30,
  },
});