import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Item from "./Item";
import { Colors } from "./theme/colors";

export default function Conteudo() {
    const noticias = [
        {
            categoria: "MIGALHAS QUENTES",
            titulo: "Desembargador nega exclusão de matéria do SBT sobre Deolane",
            data: "11/4/2025",
        },
        {
            categoria: "MIGALHAS QUENTES",
            titulo: "1ª turma do STF anula vínculo empregatício entre jornalista e SBT",
            data: "26/2/2025",
        },
        {
            categoria: "MIGALHAS QUENTES",
            titulo: 'Autores usam precedente da "Vila do Chaves" e juiz determina correção',
            data: "12/2/2025",
        },
        {
            categoria: "MIGALHAS QUENTES",
            titulo: 'SBT perde briga e STJ mantém marca "Chiquititas" com indústria',
            data: "10/2/2025",
        },
    ];

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.tituloContainer}>
                <View style={styles.barraVermelha} />
                <Text style={styles.titulo}>LEIA MAIS</Text>
            </View>

            {noticias.map((item, index) => (
                <Item
                    key={index}
                    categoria={item.categoria}
                    titulo={item.titulo}
                    data={item.data}
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    tituloContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 14,
        paddingTop: 10,
        paddingBottom: 14,
        backgroundColor: Colors.background,
    },
    barraVermelha: {
        width: 4,
        height: 28,
        backgroundColor: Colors.primary,
        marginRight: 8,
        borderRadius: 2,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.black,
    },
});