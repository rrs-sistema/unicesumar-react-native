import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default function TelaDoacao() {

    return (

        <View style={styles.card}>

            <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png" }}
                style={styles.avatar}
            />

            <Text style={styles.titulo}>Lorem ipsum dolor</Text>

            <Text style={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>

            <Text style={styles.valor}>$120.00</Text>

            <TextInput
                placeholder="ENTER TEXT HERE"
                style={styles.input}
            />

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.botaoTexto}>DONATE</Text>
            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({

    card: {
        width: "90%",
        backgroundColor: "#FFF",
        borderRadius: 25,
        padding: 20,
        alignItems: "center",
        elevation: 6
    },

    avatar: {
        width: 120,
        height: 120,
        marginBottom: 10
    },

    titulo: {
        fontSize: 18,
        fontWeight: "bold"
    },

    desc: {
        textAlign: "center",
        color: "#888",
        marginBottom: 20
    },

    valor: {
        fontSize: 30,
        color: "#2ECC71",
        fontWeight: "bold",
        marginBottom: 20
    },

    input: {
        borderWidth: 1,
        borderColor: "#DDD",
        width: "100%",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20
    },

    botao: {
        backgroundColor: "#2ECC71",
        width: "100%",
        padding: 15,
        borderRadius: 20,
        alignItems: "center"
    },

    botaoTexto: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 18
    }

});