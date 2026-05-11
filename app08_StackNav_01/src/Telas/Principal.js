import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { estilos } from '../styles/estilos';

export default function Principal({ navigation }) {
    return (
        <View style={estilos.fundoPrincipal}>
            <View style={estilos.containerPrincipal}>

                <View style={estilos.cabecalhoPrincipal}>
                    <Text style={estilos.tituloPrincipal}>Tela Principal</Text>
                    <Text style={estilos.subtituloPrincipal}>Stack Navigation</Text>
                    <Text style={estilos.textoCurso}>Dsv Mobile</Text>

                    <Image
                        source={require('../../assets/biscoito.jpg')}
                        style={estilos.imagemPrincipal}
                        resizeMode="contain"
                    />
                </View>

                <View style={estilos.corpoPrincipal}>
                    <Text style={estilos.tituloCuriosidades}>Curiosidades</Text>

                    <TouchableOpacity
                        style={estilos.botaoPrincipal}
                        onPress={() => navigation.navigate('Carnaval')}
                    >
                        <Text style={estilos.textoBotao}>Carnaval</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={estilos.botaoPrincipal}
                        onPress={() => navigation.navigate('FestaJunina')}
                    >
                        <Text style={estilos.textoBotao}>Festa Junina</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={estilos.botaoPrincipal}
                        onPress={() => navigation.navigate('Halloween')}
                    >
                        <Text style={estilos.textoBotao}>Halloween</Text>
                    </TouchableOpacity>
                </View>

                <View style={estilos.rodape}>
                    <Text style={estilos.textoRodape}>Luiz Fernando Corcini</Text>
                    <Text style={estilos.textoRodape}>2024</Text>
                </View>

            </View>
        </View>
    );
}