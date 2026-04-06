import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { formatNewsDate } from "../utils/formatters";

export default function NewsCard({ category, title, date }) {
    return (
        <View style={styles.card}>
            <Text style={styles.category}>{category}</Text>

            <Text style={styles.title}>{title}</Text>

            <Text style={styles.date}>{formatNewsDate(date)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.surface,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.lg,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.border,
        marginBottom: Spacing.sm,
    },
    category: {
        fontSize: 14,
        fontWeight: "800",
        color: Colors.primary,
        textTransform: "uppercase",
        marginBottom: Spacing.md,
    },
    title: {
        fontSize: 18,
        fontWeight: "800",
        color: Colors.textPrimary,
        lineHeight: 28,
        marginBottom: Spacing.md,
    },
    date: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.textSecondary,
    },
});