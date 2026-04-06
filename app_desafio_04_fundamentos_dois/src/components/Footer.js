import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";

export default function Footer({ authors, date }) {
    return (
        <View style={styles.container}>
            <Text style={styles.info}>
                Receba nosso informativo <Text style={styles.bold}>gratuitamente</Text>
            </Text>

            <View style={styles.iconRow}>
                <Text style={styles.icon}>✉️</Text>
                <Text style={styles.icon}>🟢</Text>
                <Text style={styles.icon}>📨</Text>
            </View>

            <Text style={styles.meta}>{authors}</Text>
            <Text style={styles.meta}>{date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.footer,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Spacing.md,
        paddingBottom: Spacing.md,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
    },
    info: {
        fontSize: 15,
        color: Colors.textSecondary,
        marginBottom: Spacing.sm,
    },
    bold: {
        fontWeight: "800",
    },
    iconRow: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: Spacing.sm,
    },
    icon: {
        fontSize: 24,
    },
    meta: {
        fontSize: 12,
        color: Colors.textSecondary,
        textAlign: "center",
    },
});