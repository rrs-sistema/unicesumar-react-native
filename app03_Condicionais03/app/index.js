import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TelaDoacao from "../components/TelaDoacao";
import TelaLista from "../components/TelaLista";

export default function Index() {

    // Inicia mostrando a Tela 1
    const [tela, setTela] = useState("Tela1");

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>DESAFIO 03</Text>

            {/* Container centralizado para as abas */}
            <View style={styles.menuContainer}>
                <View style={styles.menu}>

                    {/* Botão Tela 1 */}
                    <TouchableOpacity
                        style={[styles.botao, tela === "Tela1" && styles.botaoAtivo]}
                        onPress={() => setTela("Tela1")}
                        activeOpacity={0.8}
                    >
                        <Text style={[styles.botaoTexto, tela === "Tela1" ? styles.textoAtivo : styles.textoInativo]}>
                            Tela 1
                        </Text>
                    </TouchableOpacity>

                    {/* Botão Tela 2 */}
                    <TouchableOpacity
                        style={[styles.botao, tela === "Tela2" && styles.botaoAtivo]}
                        onPress={() => setTela("Tela2")}
                        activeOpacity={0.8}
                    >
                        <Text style={[styles.botaoTexto, tela === "Tela2" ? styles.textoAtivo : styles.textoInativo]}>
                            Tela 2
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

            {/* Renderização condicional das telas */}
            {tela === "Tela1" ? <TelaLista /> : <TelaDoacao />}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F6F8"
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center", // Centralizado para equilibrar o layout
        marginBottom: 20,
        marginTop: 60, // Aumentado para não colar no topo da tela do celular
        color: "#334155" // Um cinza chumbo, mais elegante que o preto puro
    },
    menuContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    menu: {
        flexDirection: "row",
        backgroundColor: "#E2E8F0", // Fundo cinza claro agrupando os botões
        borderRadius: 25,
        padding: 4, // Espaçamento interno para a pílula ativa não encostar na borda
    },
    botao: {
        paddingVertical: 10,
        paddingHorizontal: 30, // Botões mais largos para facilitar o toque
        borderRadius: 20,
    },
    botaoAtivo: {
        backgroundColor: "#2D8CFF",
        // Sombra suave para o botão ativo (destaque)
        shadowColor: "#2D8CFF",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    botaoTexto: {
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center"
    },
    textoAtivo: {
        color: "#FFFFFF", // Branco quando selecionado
    },
    textoInativo: {
        color: "#64748B", // Cinza médio quando não selecionado
    }
});