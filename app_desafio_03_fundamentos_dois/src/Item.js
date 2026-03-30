import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "./theme/colors";

export default function Item({
    nomePais,
    corFundo,
    corFonte,
    habitantes,
    pib,
    bandeira,
}) {
    return (
        <View style={[styles.card, { backgroundColor: corFundo }]}>

            <Image source={bandeira} style={styles.bandeira} />

            <Text style={[styles.nome, { color: corFonte }]}>
                {nomePais}
            </Text>

            <Text style={[styles.info, { color: corFonte }]}>
                👥 Habitantes: {habitantes}
            </Text>

            <Text style={[styles.info, { color: corFonte }]}>
                💰 PIB: {pib}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginBottom: 12,
        borderRadius: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    nome: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 8,
    },
    info: {
        fontSize: 14,
        marginTop: 2,
    },
    bandeira: {
        width: 70,
        height: 45,
        resizeMode: "contain",
    },
});