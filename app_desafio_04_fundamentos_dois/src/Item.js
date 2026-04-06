import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "./theme/colors";

export default function Item({ categoria, titulo, data }) {
    return (
        <View style={styles.card}>
            <Text style={styles.categoria}>{categoria}</Text>

            <Text style={styles.titulo}>{titulo}</Text>

            <Text style={styles.data}>{data}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.card,
        paddingHorizontal: 14,
        paddingVertical: 14,
        marginBottom: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.border,
    },
    categoria: {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 12,
    },
    titulo: {
        color: Colors.black,
        fontSize: 18,
        fontWeight: "bold",
        lineHeight: 26,
        marginBottom: 14,
    },
    data: {
        color: Colors.grayText,
        fontSize: 14,
        fontWeight: "600",
    },
});