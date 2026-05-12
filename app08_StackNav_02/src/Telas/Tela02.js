import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilos } from '../styleSheet/estilos';

function Tela02() {
    const nav = useNavigation();

    function voltarTela() {
        nav.goBack();
    }

    function proximaTela() {
        nav.navigate('Tela03');
    }

    const img = require('../../img/venus.png');

    return (
        <View style={estilos.Tela02_Fundo}>
            <Text style={estilos.Tela_Titulo}>Vênus</Text>

            <Image source={img} style={estilos.Planeta_img} />

            <Text style={estilos.Tela_Texto}>
                Vênus é o planeta mais quente do Sistema Solar.
            </Text>

            <Text style={estilos.Tela_Texto}>
                • Vênus possui uma atmosfera extremamente densa.
            </Text>

            <Text style={estilos.Tela_Texto}>
                • Sua temperatura média é superior a 460°C.
            </Text>

            <Text style={estilos.Tela_Texto}>
                • O planeta gira no sentido contrário da maioria dos planetas.
            </Text>

            <Text style={estilos.Tela_Texto}>
                • É conhecido como a “estrela d’alva”.
            </Text>

            <View style={estilos.Area_Botoes}>
                <Button title="VOLTAR" onPress={voltarTela} />
                <Button title="PROXIMO PLANETA" onPress={proximaTela} />
            </View>
        </View>
    );
}

export default Tela02;