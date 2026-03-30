import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "./theme/colors";

export default function Cabecalho({ imagem }) {
    return (
        <View style={styles.container}>
            <Image source={imagem} style={styles.logo} />
            <Text style={styles.titulo}>🌍 Países do Mundo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        padding: 20,
        alignItems: "center",
    },
    titulo: {
        color: Colors.white,
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 8,
    },
    logo: {
        width: 80,
        height: 80,
    },
});