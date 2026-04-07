import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { estilos } from './src/styleSheet/estilos';

function App() {
  return (
    <View style={estilos.areaFundo}>
      <View style={estilos.areaTitulo}>
        <Text style={estilos.titulo}>App Biscoito da Sorte</Text>
      </View>

      <View style={estilos.areaImg}>
        <Image
          source={require('./src/image/BS02_biscoito.png')}
          style={estilos.img}
        />
      </View>

      <View style={estilos.areaConteudo}>
        <Text style={estilos.textoFrase}>"Alguma frase aqui..."</Text>

        <TouchableOpacity style={estilos.botao}>
          <View style={estilos.areaBotao}>
            <Image
              source={require('./src/image/BS03_Btn_icone_01.png')}
              style={estilos.iconeBotao}
            />
            <Text style={estilos.textoBotao}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;