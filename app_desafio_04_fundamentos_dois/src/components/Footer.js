import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";

export default function Footer({ authors, date }) {
    return (
        <View style={styles.container}>
            <Text style={styles.infoText}>
                Receba nosso informativo <Text style={styles.bold}>gratuitamente</Text>
            </Text>

            <View style={styles.iconRow}>
                <View style={styles.iconBox}>
                    <Text style={styles.icon}>✉️</Text>
                </View>
                <View style={styles.iconBox}>
                    <Text style={styles.icon}>🟢</Text>
                </View>
                <View style={styles.iconBox}>
                    <Text style={styles.icon}>📨</Text>
                </View>
            </View>

            <Text style={styles.meta}>{authors}</Text>
            <Text style={styles.meta}>{date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Spacing.md,
        paddingTop: Spacing.md,
        paddingBottom: Spacing.lg,
        backgroundColor: Colors.footer,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
        alignItems: "center",
    },
    infoText: {
        fontSize: Typography.body,
        color: Colors.textSecondary,
        marginBottom: Spacing.md,
    },
    bold: {
        fontWeight: "800",
    },
    iconRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "80%",
        marginBottom: Spacing.md,
    },
    iconBox: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: Colors.surface,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: Colors.border,
        shadowColor: Colors.shadow,
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    icon: {
        fontSize: 22,
    },
    meta: {
        fontSize: Typography.small,
        color: Colors.textSecondary,
        textAlign: "center",
        marginBottom: 2,
        paddingHorizontal: Spacing.md,
    },
});