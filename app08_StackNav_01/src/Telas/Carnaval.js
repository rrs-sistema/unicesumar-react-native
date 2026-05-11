import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { estilos } from '../styles/estilos';

export default function Carnaval() {
    return (
        <View style={estilos.fundoTelaConteudo}>
            <View style={estilos.containerConteudo}>

                <View style={estilos.cabecalhoConteudo}>
                    <Image
                        source={require('../../assets/carnaval.png')}
                        style={estilos.imagemCabecalho}
                        resizeMode="contain"
                    />

                    <View>
                        <Text style={estilos.labelTela}>CARNAVAL</Text>
                        <Text style={estilos.tituloConteudo}>Curiosidades</Text>
                    </View>
                </View>

                <ScrollView style={estilos.corpoConteudo}>
                    <Text style={estilos.subtituloConteudo}>Introdução:</Text>

                    <Text style={estilos.paragrafo}>
                        O carnaval brasileiro é muito mais do que uma simples festa; é uma
                        expressão cultural que impulsiona a economia e o turismo do país.
                    </Text>

                    <Text style={estilos.fraseDestaque}>
                        Mas, engana-se quem pensa que o carnaval é uma festa que teve origem no Brasil.
                    </Text>

                    <Text style={estilos.subtituloConteudo}>Origens</Text>

                    <Text style={estilos.paragrafo}>
                        Para dar início às controvérsias, encontramos relatos de especialistas
                        que associam os ritos carnavalescos a celebrações antigas relacionadas
                        aos louvores dos povos antigos para boas colheitas agrárias.
                    </Text>

                    <Text style={estilos.subtituloConteudo}>Curiosidades: Egito</Text>

                    <Image
                        source={require('../../assets/carnaval.png')}
                        style={estilos.imagemTexto}
                        resizeMode="contain"
                    />

                    <Text style={estilos.paragrafo}>
                        Entre pirâmides e esfinges, a origem do carnaval pode estar ligada a
                        antigas festas populares e rituais de celebração.
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