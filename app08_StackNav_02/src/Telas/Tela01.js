import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilos } from '../styleSheet/estilos';

function Tela01() {
    const nav = useNavigation();

    function voltarTela() {
        nav.goBack();
    }

    function proximaTela() {
        nav.navigate('Tela02');
    }

    const img = require('../../img/mercurio.png');

    return (
        <View style={estilos.Tela01_Fundo}>
            <Text style={estilos.Tela_Titulo}>Mercúrio</Text>

            <Image source={img} style={estilos.Planeta_img} />

            <Text style={estilos.Tela_Texto}>
                Mercúrio é o planeta mais próximo do Sol.
            </Text>

            <Text style={estilos.Tela_Texto}>
                • É o menor planeta do Sistema Solar.
            </Text>

            <Text style={estilos.Tela_Texto}>
                • Um ano em Mercúrio dura apenas 88 dias terrestres.
            </Text>

            <Text style={estilos.Tela_Texto}>
                • Durante o dia, a temperatura pode ultrapassar 400°C.
            </Text>

            <Text style={estilos.Tela_Texto}>
                • À noite, a temperatura pode chegar a -180°C.
            </Text>

            <View style={estilos.Area_Botoes}>
                <Button title="VOLTAR" onPress={voltarTela} />
                <Button title="PROXIMO PLANETA" onPress={proximaTela} />
            </View>
        </View>
    );
}

export default Tela01;