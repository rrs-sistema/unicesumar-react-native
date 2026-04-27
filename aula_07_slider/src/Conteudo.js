import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight, Image } from "react-native";
import Slider from "@react-native-community/slider";
import { estilos } from "./styleSheet/estilos";

function Conteudo() {
    const texto =
        "O componente Slider permite que o usuário escolha um valor de um intervalo predefinido de valores, arrastando um botão ao longo de uma linha do controle deslizante";

    const [corFundoCxTxt, setCorFundoCxTxt] = useState("white");
    const [nomeUsr, setNomeUsr] = useState("");
    const [corTexto, setCorTexto] = useState("black");
    const [corFundoConteudo, setCorFundoConteudo] = useState("yellow");

    function alteraCorFundo() {
        if (corFundoCxTxt === "white") {
            setCorFundoCxTxt("orange");
        } else {
            setCorFundoCxTxt("white");
        }
    }

    function alteraNomeUsr(nome) {
        setNomeUsr(nome);
    }

    function deslizaSlider1() {
        const cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setCorTexto(cor);
    }

    function deslizaSlider2() {
        const cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setCorFundoConteudo(cor);
    }

    return (
        <View style={estilos.area}>
            <View style={estilos.areaSup}>
                <View style={estilos.areaIcone}>
                    <Image
                        source={require("./img/slider_icon.png")}
                        style={estilos.icone}
                    />
                </View>

                <Text style={estilos.titulo}>Componente Slider</Text>

                <View style={[estilos.areaConteudo, { backgroundColor: corFundoConteudo }]}>
                    <Text style={[estilos.textoDescricao, { color: corTexto }]}>
                        {texto}
                    </Text>

                    <Text style={estilos.label}>Digite seu nome:</Text>

                    <TextInput
                        style={[estilos.caixaTexto, { backgroundColor: corFundoCxTxt }]}
                        value={nomeUsr}
                        onChangeText={alteraNomeUsr}
                    />

                    <Text style={estilos.label}>Deslize o slider 1:</Text>

                    <Slider
                        style={estilos.slider}
                        minimumValue={0}
                        maximumValue={100}
                        step={5}
                        onValueChange={deslizaSlider1}
                    />

                    <Text style={estilos.label}>Deslize o slider 2:</Text>

                    <Slider
                        style={estilos.slider}
                        minimumValue={0}
                        maximumValue={100}
                        step={10}
                        minimumTrackTintColor="red"
                        maximumTrackTintColor="magenta"
                        onValueChange={deslizaSlider2}
                    />

                    <TouchableHighlight
                        style={estilos.botao}
                        underlayColor="#8b0000"
                        onPress={alteraCorFundo}
                    >
                        <Text style={estilos.textoBotao}>CLIQUE{"\n"}AQUI</Text>
                    </TouchableHighlight>
                </View>
            </View>

            <View style={estilos.rodape}>
                <Text style={estilos.txtRodapeEsq}>Luíz Corcini</Text>
                <Text style={estilos.txtRodapeDir}>dd/mm/aaaa</Text>
            </View>
        </View>
    );
}

export default Conteudo;