import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "./theme/colors";

export default function Cabecalho() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.botaoTexto}>VEJA MAIS NO PORTAL</Text>
            </TouchableOpacity>

            <Text style={styles.subtitulo}>cadastre-se, comente, saiba mais</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        alignItems: "center",
        paddingTop: 16,
        paddingBottom: 10,
    },
    botao: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    botaoTexto: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: "bold",
    },
    subtitulo: {
        marginTop: 8,
        fontSize: 14,
        color: Colors.grayText,
    },
});