import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "./theme/colors";

export default function Rodape({ nome, data }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textoInformativo}>
                Receba nosso informativo <Text style={styles.bold}>gratuitamente</Text>
            </Text>

            <View style={styles.iconesContainer}>
                <Text style={styles.icone}>✉️</Text>
                <Text style={styles.icone}>🟢</Text>
                <Text style={styles.icone}>📨</Text>
            </View>

            <Text style={styles.autor}>{nome}</Text>
            <Text style={styles.autor}>{data}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.footer,
        paddingVertical: 10,
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#D9D9D9",
    },
    textoInformativo: {
        fontSize: 15,
        color: Colors.grayDark,
        marginBottom: 8,
    },
    bold: {
        fontWeight: "bold",
    },
    iconesContainer: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 8,
    },
    icone: {
        fontSize: 24,
    },
    autor: {
        fontSize: 12,
        color: Colors.grayDark,
    },
});