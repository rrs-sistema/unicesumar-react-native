import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Item from "./Item";
import { Colors } from "./theme/colors";

function Conteudo() {

    const paises = [
        "Brasil",
        "China",
        "Japão",
        "Estados Unidos",
        "Alemanha",
        "Índia",
        "França",
    ];

    const coresFundo = [
        "#2E7D32",
        "#C62828",
        "#FFFFFF",
        "#1565C0",
        "#424242",
        "#EF6C00",
        "#283593",
    ];

    const coresFonte = [
        "#FFFFFF",
        "#FFEB3B",
        "#000000",
        "#FFFFFF",
        "#FFEB3B",
        "#FFFFFF",
        "#FFFFFF",
    ];

    const habitantes = [
        "203 milhões",
        "1.4 bilhões",
        "125 milhões",
        "331 milhões",
        "83 milhões",
        "1.4 bilhões",
        "67 milhões",
    ];

    const pibs = [
        "1.92 trilhões USD",
        "17 trilhões USD",
        "4.2 trilhões USD",
        "26 trilhões USD",
        "4.5 trilhões USD",
        "3.7 trilhões USD",
        "3 trilhões USD",
    ];

    const bandeiras = [
        require("../assets/brasil.png"),
        require("../assets/china.png"),
        require("../assets/japao.png"),
        require("../assets/eua.png"),
        require("../assets/alemanha.png"),
        require("../assets/india.png"),
        require("../assets/franca.png"),
    ];

    return (
        <ScrollView style={styles.container}>
            {paises.map((nome, index) => (
                <Item
                    key={index}
                    nomePais={nome}
                    corFundo={coresFundo[index]}
                    corFonte={coresFonte[index]}
                    habitantes={habitantes[index]}
                    pib={pibs[index]}
                    bandeira={bandeiras[index]}
                />
            ))}
        </ScrollView>
    );
}

export default Conteudo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 16,
    },
});