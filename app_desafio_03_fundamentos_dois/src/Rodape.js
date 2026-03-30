import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "./theme/colors";

export default function Rodape({ nome, data }) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{nome}</Text>
            <Text style={styles.texto}>{data}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark,
        padding: 15,
        alignItems: "center",
    },
    texto: {
        color: Colors.white,
        fontSize: 14,
    },
});