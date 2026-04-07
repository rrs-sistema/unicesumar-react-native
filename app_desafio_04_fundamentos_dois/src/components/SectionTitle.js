import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";

export default function SectionTitle({ title }) {
    return (
        <View style={styles.container}>
            <View style={styles.accentBar} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: Spacing.md,
        paddingTop: Spacing.md,
        paddingBottom: Spacing.md,
    },
    accentBar: {
        width: 4,
        height: 28,
        backgroundColor: Colors.primary,
        borderRadius: 2,
        marginRight: Spacing.sm,
    },
    title: {
        fontSize: Typography.sectionTitle,
        fontWeight: "800",
        color: Colors.textPrimary,
        letterSpacing: 0.2,
    },
});