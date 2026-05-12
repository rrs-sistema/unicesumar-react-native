import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilos } from '../styleSheet/estilos';

function Tela03() {
    const nav = useNavigation();

    function voltarTela() {
        nav.goBack();
    }

    const img = require('../../img/marte.png');

    return (
        <View style={estilos.Tela03_Fundo}>
            <Text style={estilos.Tela_Titulo}>Marte</Text>

            <Image source={img} style={estilos.Planeta_img} />

            <Text style={estilos.Tela_Texto}>
                Marte é conhecido como o planeta vermelho.
            </Text>

            <Text style={estilos.Tela_Texto}>
                • A coloração avermelhada é causada por óxido de ferro.
            </Text>

            <Text style={estilos.Tela_Texto}>
                • Marte possui o maior vulcão do Sistema Solar.
            </Text>

            <Text style={estilos.Tela_Texto}>
                • Cientistas estudam a possibilidade de vida antiga no planeta.
            </Text>

            <Text style={estilos.Tela_Texto}>
                • Missões espaciais investigam Marte constantemente.
            </Text>

            <View style={estilos.Area_Botao_Unico}>
                <Button title="VOLTAR" onPress={voltarTela} />
            </View>
        </View>
    );
}

export default Tela03;