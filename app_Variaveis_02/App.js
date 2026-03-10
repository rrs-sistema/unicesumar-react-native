import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const textTitle = "Aplicativo de variáveis";
  const textDescription = "Ah, quem me dera ser poeta \
                            Pra cantar em seu louvor\
                            Belas canções, lindos poemas\
                            Doces frases de amor";
  const textColor = "#777";
  const sizeTitle = "22px";
  const sizeDescripition = "16px";

  const img1 = "https://picsum.photos/120";
  const img2 = "https://picsum.photos/121";
  const img3 = "https://picsum.photos/122";
  
   return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
