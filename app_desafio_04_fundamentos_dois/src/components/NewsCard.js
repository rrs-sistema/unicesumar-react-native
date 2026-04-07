import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";

export default function NewsCard({ category, title, date }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.card}>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: Spacing.sm,
        marginBottom: Spacing.sm,
    },
    card: {
        backgroundColor: Colors.surface,
        borderRadius: 10,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.lg,
        borderWidth: 1,
        borderColor: Colors.border,
        shadowColor: Colors.shadow,
        shadowOpacity: 0.06,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    category: {
        fontSize: Typography.category,
        fontWeight: "800",
        color: Colors.primary,
        marginBottom: Spacing.md,
        textTransform: "uppercase",
    },
    title: {
        fontSize: Typography.cardTitle,
        fontWeight: "800",
        color: Colors.textPrimary,
        lineHeight: 29,
        marginBottom: Spacing.md,
    },
    date: {
        fontSize: Typography.caption,
        fontWeight: "600",
        color: Colors.textSecondary,
    },
});