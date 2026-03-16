import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function TelaLista() {

    return (
        <View style={styles.card}>

            <View style={styles.searchBar}>
                <Text style={{ color: "#999" }}>🔎 Search</Text>
            </View>

            <Text style={styles.resultado}>300 Results</Text>

            <View style={styles.item}>

                <Image
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png" }}
                    style={styles.avatar}
                />

                <View>
                    <Text style={styles.titulo}>Lorem ipsum dolor</Text>
                    <Text style={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>

                    <View style={styles.barra}>
                        <View style={styles.progresso} />
                    </View>

                </View>

            </View>

            <View style={styles.item}>

                <Image
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png" }}
                    style={styles.avatar}
                />

                <View>
                    <Text style={styles.titulo}>Lorem ipsum dolor</Text>
                    <Text style={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>

                    <View style={styles.barra}>
                        <View style={styles.progresso} />
                    </View>

                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    card: {
        width: "90%",
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 20,
        elevation: 6
    },

    searchBar: {
        backgroundColor: "#E7EEF7",
        padding: 10,
        borderRadius: 20,
        marginBottom: 20
    },

    resultado: {
        marginBottom: 10,
        color: "#888"
    },

    item: {
        flexDirection: "row",
        marginBottom: 20
    },

    avatar: {
        width: 60,
        height: 60,
        marginRight: 10
    },

    titulo: {
        fontWeight: "bold"
    },

    desc: {
        color: "#777",
        fontSize: 12
    },

    barra: {
        height: 6,
        backgroundColor: "#DDD",
        borderRadius: 5,
        marginTop: 5,
        width: 150
    },

    progresso: {
        height: 6,
        width: 80,
        backgroundColor: "#2ECC71",
        borderRadius: 5
    }

});