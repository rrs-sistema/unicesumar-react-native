import React, { useState } from 'react';
import {
  Alert,
  Platform,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const anoAtual = new Date().getFullYear();

const sistemas = [
  {
    title: 'Sistemas Comerciais',
    data: [
      {
        icon: 'cash-register',
        nome: 'Sistema PDV',
        descricao:
          'Sistema para vendas, controle de caixa, produtos, clientes, formas de pagamento e relatórios.',
        recursos: ['Vendas', 'Caixa', 'Produtos', 'Relatórios'],
      },
      {
        icon: 'boxes',
        nome: 'Controle de Estoque',
        descricao:
          'Gestão de entrada e saída de produtos, estoque mínimo, fornecedores e movimentações.',
        recursos: ['Estoque', 'Fornecedores', 'Movimentações'],
      },
    ],
  },
  {
    title: 'Prestação de Serviços',
    data: [
      {
        icon: 'tools',
        nome: 'App de Ordem de Serviço',
        descricao:
          'Aplicativo para oficinas, assistência técnica e empresas que trabalham com atendimento por ordem de serviço.',
        recursos: ['OS', 'Clientes', 'Serviços', 'Status'],
      },
      {
        icon: 'clipboard-list',
        nome: 'Gestão de Atendimento',
        descricao:
          'Controle de chamados, acompanhamento de atendimentos, histórico do cliente e produtividade da equipe.',
        recursos: ['Chamados', 'Histórico', 'Equipe'],
      },
    ],
  },
  {
    title: 'Aplicativos Mobile e Web',
    data: [
      {
        icon: 'mobile-alt',
        nome: 'Aplicativos Mobile',
        descricao:
          'Apps personalizados para Android, iOS e Web, focados em usabilidade, desempenho e experiência do usuário.',
        recursos: ['Android', 'iOS', 'Web'],
      },
      {
        icon: 'globe',
        nome: 'Sistemas Web',
        descricao:
          'Painéis administrativos, dashboards, portais, áreas do cliente e soluções para gestão empresarial.',
        recursos: ['Dashboard', 'Portal', 'Admin'],
      },
    ],
  },
];

function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />

      <ScrollView style={styles.homeContainer} contentContainerStyle={styles.homeContent}>
        <View style={styles.heroCard}>
          <View style={styles.logoCircle}>
            <MaterialIcons name="developer-mode" size={52} color="#2563eb" />
          </View>

          <Text style={styles.heroTitle}>Soluções Digitais para o seu Negócio</Text>

          <Text style={styles.heroSubtitle}>
            Sistemas modernos para empresas que precisam vender, controlar, atender e crescer.
          </Text>

          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>React Native • Tab Navigation</Text>
          </View>
        </View>

        <View style={styles.homeSection}>
          <Text style={styles.sectionTitleWhite}>O que entregamos?</Text>

          <View style={styles.featureCard}>
            <MaterialIcons name="point-of-sale" size={30} color="#38bdf8" />
            <View style={styles.featureInfo}>
              <Text style={styles.featureTitle}>PDV e Gestão Comercial</Text>
              <Text style={styles.featureText}>
                Controle suas vendas, produtos, clientes, caixa e relatórios em um único sistema.
              </Text>
            </View>
          </View>

          <View style={styles.featureCard}>
            <MaterialIcons name="build-circle" size={30} color="#22c55e" />
            <View style={styles.featureInfo}>
              <Text style={styles.featureTitle}>Ordem de Serviço</Text>
              <Text style={styles.featureText}>
                Ideal para oficinas, assistência técnica, prestadores de serviço e atendimento interno.
              </Text>
            </View>
          </View>

          <View style={styles.featureCard}>
            <MaterialIcons name="devices" size={30} color="#f59e0b" />
            <View style={styles.featureInfo}>
              <Text style={styles.featureTitle}>Apps Mobile e Web</Text>
              <Text style={styles.featureText}>
                Aplicações modernas, responsivas e pensadas para o mercado atual.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.footerCard}>
          <Text style={styles.footerText}>RRS System Technology • {anoAtual}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function PortfolioScreen() {
  return (
    <SafeAreaView style={styles.safeLight}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />

      <SectionList
        sections={sistemas}
        keyExtractor={(item, index) => item.nome + index}
        contentContainerStyle={styles.portfolioContent}
        ListHeaderComponent={
          <View style={styles.portfolioHeader}>
            <View style={styles.avatar}>
              <MaterialIcons name="business-center" size={58} color="#2563eb" />
            </View>

            <Text style={styles.pageTitle}>Portfólio de Sistemas</Text>

            <Text style={styles.pageSubtitle}>
              Conheça algumas soluções que podem ser disponibilizadas para o mercado.
            </Text>
          </View>
        }
        renderSectionHeader={({ section }) => (
          <Text style={styles.portfolioSectionTitle}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.systemCard}>
            <View style={styles.systemIcon}>
              <FontAwesome5 name={item.icon} size={24} color="#2563eb" />
            </View>

            <View style={styles.systemInfo}>
              <Text style={styles.systemTitle}>{item.nome}</Text>
              <Text style={styles.systemDescription}>{item.descricao}</Text>

              <View style={styles.chipContainer}>
                {item.recursos.map((recurso) => (
                  <View key={recurso} style={styles.chip}>
                    <Text style={styles.chipText}>{recurso}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

function ContatoScreen() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  function enviarMensagem() {
    if (!nome.trim() || !mensagem.trim()) {
      Alert.alert('Atenção', 'Informe seu nome e sua mensagem.');
      return;
    }

    Alert.alert(
      'Mensagem enviada',
      `Obrigado, ${nome}! Em breve entraremos em contato.`
    );

    setNome('');
    setMensagem('');
  }

  return (
    <SafeAreaView style={styles.safeLight}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />

      <ScrollView contentContainerStyle={styles.contactContent}>
        <Text style={styles.pageTitle}>Entre em Contato</Text>

        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Informações Comerciais</Text>

          <View style={styles.contactLine}>
            <MaterialIcons name="phone" size={20} color="#2563eb" />
            <Text style={styles.contactText}>(41) 99999-9999</Text>
          </View>

          <View style={styles.contactLine}>
            <MaterialIcons name="email" size={20} color="#2563eb" />
            <Text style={styles.contactText}>contato@rrssystem.com</Text>
          </View>

          <View style={styles.contactLine}>
            <FontAwesome5 name="linkedin" size={20} color="#2563eb" />
            <Text style={styles.contactText}>linkedin.com/company/rrssystem</Text>
          </View>

          <View style={styles.contactLine}>
            <Ionicons name="logo-instagram" size={20} color="#2563eb" />
            <Text style={styles.contactText}>@rrssystem.technology</Text>
          </View>

          <View style={styles.contactLine}>
            <MaterialIcons name="location-on" size={20} color="#2563eb" />
            <Text style={styles.contactText}>Curitiba - PR</Text>
          </View>
        </View>

        <Text style={styles.formTitle}>Solicitar Demonstração</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#64748b"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Digite sua mensagem"
          placeholderTextColor="#64748b"
          value={mensagem}
          onChangeText={setMensagem}
          multiline
          textAlignVertical="top"
        />

        <TouchableOpacity style={styles.button} onPress={enviarMensagem}>
          <Text style={styles.buttonText}>Enviar Mensagem</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: '800',
            color: '#0f172a',
          },
          tabBarActiveTintColor: '#2563eb',
          tabBarInactiveTintColor: '#94a3b8',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '700',
          },
          tabBarStyle: {
            height: 64,
            paddingBottom: 8,
            paddingTop: 8,
            borderTopWidth: 1,
            borderTopColor: '#e2e8f0',
          },
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') {
              return <MaterialIcons name="home" size={size} color={color} />;
            }

            if (route.name === 'Portfólio') {
              return <MaterialIcons name="apps" size={size} color={color} />;
            }

            return <MaterialIcons name="contact-mail" size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Portfólio" component={PortfolioScreen} />
        <Tab.Screen name="Contato" component={ContatoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const cardShadow = Platform.select({
  web: {
    boxShadow: '0 8px 22px rgba(15, 23, 42, 0.10)',
  },
  default: {
    elevation: 4,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.14,
    shadowRadius: 12,
  },
});

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0f172a',
  },

  safeLight: {
    flex: 1,
    backgroundColor: '#eef6ff',
  },

  homeContainer: {
    flex: 1,
    backgroundColor: '#0f172a',
  },

  homeContent: {
    padding: 18,
    paddingBottom: 30,
  },

  heroCard: {
    minHeight: 420,
    backgroundColor: '#e8f0fb',
    borderRadius: 28,
    padding: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoCircle: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },

  heroTitle: {
    fontSize: 31,
    fontWeight: '900',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 14,
  },

  heroSubtitle: {
    fontSize: 16,
    color: '#334155',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 22,
  },

  heroBadge: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,
  },

  heroBadgeText: {
    color: '#ffffff',
    fontWeight: '800',
  },

  homeSection: {
    marginTop: 22,
  },

  sectionTitleWhite: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 14,
  },

  featureCard: {
    backgroundColor: '#1e293b',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },

  featureInfo: {
    flex: 1,
    marginLeft: 14,
  },

  featureTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 5,
  },

  featureText: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
  },

  footerCard: {
    marginTop: 10,
    backgroundColor: '#1e293b',
    borderRadius: 18,
    padding: 18,
    alignItems: 'center',
  },

  footerText: {
    color: '#e2e8f0',
    fontSize: 14,
  },

  portfolioContent: {
    padding: 18,
    paddingBottom: 34,
  },

  portfolioHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },

  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  pageTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#020617',
    textAlign: 'center',
    marginBottom: 8,
  },

  pageSubtitle: {
    fontSize: 15,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 22,
  },

  portfolioSectionTitle: {
    fontSize: 21,
    fontWeight: '900',
    color: '#1e3a8a',
    marginTop: 12,
    marginBottom: 12,
  },

  systemCard: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    ...cardShadow,
  },

  systemIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  systemInfo: {
    flex: 1,
  },

  systemTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#020617',
    marginBottom: 6,
  },

  systemDescription: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },

  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
    gap: 8,
  },

  chip: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },

  chipText: {
    color: '#1d4ed8',
    fontSize: 12,
    fontWeight: '800',
  },

  contactContent: {
    padding: 20,
    paddingBottom: 40,
  },

  contactCard: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 18,
    marginTop: 22,
    marginBottom: 28,
    ...cardShadow,
  },

  contactTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#020617',
    marginBottom: 16,
  },

  contactLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  contactText: {
    fontSize: 15,
    color: '#0f172a',
    marginLeft: 10,
  },

  formTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#020617',
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 15,
    marginBottom: 14,
    color: '#020617',
  },

  textArea: {
    minHeight: 120,
  },

  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900',
  },
});