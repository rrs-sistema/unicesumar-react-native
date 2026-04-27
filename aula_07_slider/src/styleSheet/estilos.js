import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: "#87c7e2",
    },

    areaSup: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 8,
        paddingTop: 12,
    },

    areaIcone: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#ff7f7f",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },

    icone: {
        width: 36,
        height: 36,
        resizeMode: "contain",
    },

    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#c00000",
        marginBottom: 14,
    },

    areaConteudo: {
        width: "100%",
        borderRadius: 2,
        padding: 12,
        minHeight: 430,
    },

    textoDescricao: {
        fontSize: 14,
        lineHeight: 24,
        textAlign: "justify",
        marginBottom: 18,
    },

    label: {
        fontSize: 14,
        color: "#000",
        marginBottom: 8,
        marginTop: 6,
    },

    caixaTexto: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: "#999",
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
    },

    slider: {
        width: "100%",
        height: 40,
        marginBottom: 10,
    },

    botao: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: "#8b0000",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10,
    },

    textoBotao: {
        color: "yellow",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 12,
    },

    rodape: {
        height: 50,
        backgroundColor: "#d8f0ff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 28,
    },

    txtRodapeEsq: {
        fontSize: 14,
        color: "#000",
    },

    txtRodapeDir: {
        fontSize: 14,
        color: "#000",
    },
});

export { estilos };