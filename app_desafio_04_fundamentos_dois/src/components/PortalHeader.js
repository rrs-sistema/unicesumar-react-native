import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
import { Typography } from "../theme/typography";
import { APP_TEXTS } from "../constants/texts";

export default function PortalHeader() {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>{APP_TEXTS.headerButton}</Text>
            </Pressable>

            <Text style={styles.subtitle}>{APP_TEXTS.headerSubtitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        alignItems: "center",
        paddingTop: Spacing.xl,
        paddingBottom: Spacing.lg,
    },
    button: {
        backgroundColor: Colors.primary,
        minWidth: 230,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: Colors.shadow,
        shadowOpacity: 0.18,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
        elevation: 5,
    },
    buttonText: {
        color: Colors.white,
        fontSize: Typography.button,
        fontWeight: "800",
        letterSpacing: 0.3,
    },
    subtitle: {
        marginTop: Spacing.sm,
        fontSize: Typography.caption,
        color: Colors.textMuted,
    },
});