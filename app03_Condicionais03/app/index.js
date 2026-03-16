import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TelaDoacao from "../components/TelaDoacao";
import TelaLista from "../components/TelaLista";

export default function Index() {

    const [tela, setTela] = useState("Tela1");

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>DESAFIO 03</Text>

            <View style={styles.menu}>
                <TouchableOpacity style={styles.botao} onPress={() => setTela("Tela One")}>
                    <Text style={styles.botaoTexto}>Tela 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={() => setTela("Tela Two")}>
                    <Text style={styles.botaoTexto}>Tela 2</Text>
                </TouchableOpacity>
            </View>

            {tela === "Tela1" ? <TelaLista /> : <TelaDoacao />}

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f8"
    },

    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20
    },

    menu: {
        flexDirection: "row",
        marginBottom: 20
    },

    botao: {
        backgroundColor: "#2d8cff",
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 20
    },

    botaoTexto: {
        color: "#fff",
        fontWeight: "bold"
    }

});