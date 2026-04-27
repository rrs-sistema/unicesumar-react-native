import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linguagem: 0,
      msg: '',
    };

    this.selecionou = this.selecionou.bind(this);
  }

  selecionou(itemIndex) {
    let texto = 'Você selecionou a linguagem';
    const arrayLinguagens = ['Java', 'C#', 'JavaScript', 'SQL', 'C++', 'PHP'];

    if (itemIndex < 1) {
      texto = 'NENHUMA LINGUAGEM SELECIONADA!!';
    } else {
      texto =
        'Você selecionou a linguagem\n' + arrayLinguagens[itemIndex - 1];
    }

    this.setState({
      linguagem: itemIndex,
      msg: texto,
    });
  }

  render() {
    return (
      <View style={estilos.area}>
        <View style={estilos.areaSup}>
          <Image
            source={require('./src/assets/unicesumar_logo.png')}
            style={estilos.logo}
          />

          <Text style={estilos.titulo}>DESAFIO 01</Text>
          <Text style={estilos.subtitulo}>Componente Picker</Text>

          <Text style={estilos.questao}>
            Qual linguagem de Programação você prefere?
          </Text>

          <Picker
            style={estilos.selecionador}
            selectedValue={this.state.linguagem}
            onValueChange={this.selecionou}
          >
            <Picker.Item key={0} label="Selecione" value={0} />
            <Picker.Item key={1} label="Java" value={1} />
            <Picker.Item key={2} label="C#" value={2} />
            <Picker.Item key={2} label="JavaScript" value={3} />
            <Picker.Item key={2} label="SQL" value={4} />
            <Picker.Item key={3} label="C++" value={5} />
            <Picker.Item key={4} label="PHP" value={6} />
          </Picker>
        </View>

        <View style={estilos.rodape}>
          <Text style={estilos.mensagem}>{this.state.msg}</Text>
        </View>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  area: {
    flex: 1,
    marginHorizontal: 5,
    marginTop: 30,
  },

  areaSup: {
    flex: 4,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  rodape: {
    flex: 1,
    backgroundColor: 'darkorange',
    justifyContent: 'center',
    padding: 30,
  },

  logo: {
    width: 175,
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  subtitulo: {
    fontSize: 25,
    fontStyle: 'italic',
    marginBottom: 20,
  },

  questao: {
    fontSize: 18,
    marginLeft: 30,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },

  selecionador: {
    width: 300,
    height: 50,
    backgroundColor: 'lightgray',
    marginTop: 10,
  },

  mensagem: {
    fontSize: 20,
    marginTop: 10,
    color: 'darkblue',
  },
});

export default App;