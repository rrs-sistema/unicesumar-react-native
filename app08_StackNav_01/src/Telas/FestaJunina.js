import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { estilos } from '../styles/estilos';

export default function FestaJunina() {
    return (
        <View style={estilos.fundoTelaConteudo}>
            <View style={estilos.containerConteudo}>

                <View style={estilos.cabecalhoConteudo}>
                    <Image
                        source={require('../../assets/festa-junina.png')}
                        style={estilos.imagemCabecalho}
                        resizeMode="contain"
                    />

                    <View>
                        <Text style={estilos.labelTela}>FESTA JUNINA</Text>
                        <Text style={estilos.tituloConteudo}>Curiosidades</Text>
                    </View>
                </View>

                <ScrollView style={estilos.corpoConteudo}>
                    <Text style={estilos.subtituloConteudo}>Introdução:</Text>

                    <Text style={estilos.paragrafo}>
                        Festas juninas no Brasil, também conhecidas como festas de São João,
                        são comemorações anuais brasileiras adaptadas do solstício de verão europeu.
                    </Text>

                    <Text style={estilos.subtituloConteudo}>Origens</Text>

                    <Text style={estilos.paragrafo}>
                        A origem da festa junina é pagã, ou seja, é contrária à doutrina cristã,
                        porque as festas homenageavam os deuses da natureza e da fertilidade.
                    </Text>

                    <Text style={estilos.fraseDestaque}>
                        Qual é o significado da festa de São João?
                    </Text>

                    <Image
                        source={require('../../assets/festa-junina.png')}
                        style={estilos.imagemTexto}
                        resizeMode="contain"
                    />

                    <Text style={estilos.paragrafo}>
                        As festas do mês de junho fazem referência a três santos: Santo Antônio,
                        São João e São Pedro.
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