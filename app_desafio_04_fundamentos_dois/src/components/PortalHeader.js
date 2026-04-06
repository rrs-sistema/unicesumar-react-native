import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";
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
        paddingTop: Spacing.lg,
        paddingBottom: Spacing.md,
    },
    button: {
        backgroundColor: Colors.primary,
        minWidth: 220,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: Colors.shadow,
        shadowOpacity: 0.18,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
    buttonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: "800",
        letterSpacing: 0.4,
    },
    subtitle: {
        marginTop: Spacing.sm,
        fontSize: 14,
        color: Colors.textMuted,
    },
});