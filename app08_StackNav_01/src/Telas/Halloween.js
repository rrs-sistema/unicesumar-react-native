import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { estilos } from '../styles/estilos';

export default function Halloween() {
    return (
        <View style={estilos.fundoTelaConteudo}>
            <View style={estilos.containerConteudo}>

                <View style={estilos.cabecalhoConteudo}>
                    <Image
                        source={require('../../assets/halloween.png')}
                        style={estilos.imagemCabecalho}
                        resizeMode="contain"
                    />

                    <View>
                        <Text style={estilos.labelTela}>HALLOWEEN</Text>
                        <Text style={estilos.tituloConteudo}>Curiosidades</Text>
                    </View>
                </View>

                <ScrollView style={estilos.corpoConteudo}>
                    <Text style={estilos.subtituloConteudo}>Introdução:</Text>

                    <Text style={estilos.paragrafo}>
                        O significado de Halloween está relacionado ao sentido da própria data.
                        De acordo com estudos, o nome teria vindo da expressão All Hallows Eve.
                    </Text>

                    <Text style={estilos.subtituloConteudo}>Origens</Text>

                    <Image
                        source={require('../../assets/halloween.png')}
                        style={estilos.imagemTexto}
                        resizeMode="contain"
                    />

                    <Text style={estilos.paragrafo}>
                        Os historiadores apontam que a provável origem do Halloween tenha sido
                        um festival praticado pelos celtas chamado Samhain.
                    </Text>

                    <View style={estilos.linhaImagemTexto}>
                        <Image
                            source={require('../../assets/halloween.png')}
                            style={estilos.imagemPequena}
                            resizeMode="contain"
                        />

                        <Text style={estilos.fraseDestaque}>
                            Curiosidades: Bruxas
                        </Text>
                    </View>

                    <Text style={estilos.paragrafo}>
                        Bruxas sempre aparecem como símbolo do Halloween, sendo um dos elementos
                        mais lembrados nessa comemoração.
                    </Text>
                </ScrollView>

                <View style={estilos.rodape}>
                    <Text style={estilos.textoRodape}>Luiz Fernando Corcini</Text>
                    <Text style={estilos.textoRodape}>2024</Text>
                </View>

            </View>
        </View>
    );
}