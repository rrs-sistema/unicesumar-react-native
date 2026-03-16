import { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function TelaDoacao() {
    // Estado para armazenar a mensagem do usuário
    const [mensagem, setMensagem] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            {/* KeyboardAvoidingView empurra a tela para cima no iOS quando o teclado abre */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={{ flex: 1 }}
            >
                {/* keyboardShouldPersistTaps="handled" fecha o teclado ao tocar fora do input */}
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >

                    {/* Fundo Azul Superior */}
                    <View style={styles.topBackground}>
                        <View style={styles.header}>
                            {/* Botões do cabeçalho agora são clicáveis e com área de toque expandida (hitSlop) */}
                            <TouchableOpacity hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
                                <Text style={styles.headerIcon}>⟨</Text>
                            </TouchableOpacity>
                            <TouchableOpacity hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
                                <Text style={styles.headerIcon}>🔍</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Card Branco Sobreposto */}
                    <View style={styles.card}>

                        {/* Avatar Flutuante */}
                        <View style={styles.avatarContainer}>
                            <Image
                                source={{ uri: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png" }}
                                style={styles.avatar}
                                resizeMode="contain"
                            />
                        </View>

                        <Text style={styles.titulo}>Lorem ipsum dolor</Text>

                        <Text style={styles.desc}>
                            Lorem ipsum dolor sit amet, consectetuer diam adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna trwonummy.
                        </Text>

                        {/* Container do Valor de Doação */}
                        <View style={styles.amountContainer}>
                            <Text style={styles.valor}>$120.00</Text>
                            <View style={styles.underline} />
                        </View>

                        {/* Área de Texto Interativa */}
                        <TextInput
                            placeholder="ENTER TEXT HERE"
                            placeholderTextColor="#BAC6DA" // Cinza mais claro e elegante
                            style={styles.input}
                            multiline={true}
                            textAlignVertical="top"
                            value={mensagem}
                            onChangeText={setMensagem} // Atualiza o estado ao digitar
                            autoCorrect={false}
                        />

                        {/* Botão de Doação com feedback tátil */}
                        <TouchableOpacity style={styles.botao} activeOpacity={0.8}>
                            <Text style={styles.botaoTexto}>DONATE</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDF5D3", // Fundo amarelado
    },
    scrollContent: {
        flexGrow: 1,
        alignItems: "center",
        paddingBottom: 40, // Espaço extra no fim da rolagem
    },
    topBackground: {
        backgroundColor: "#00CDEB",
        width: "100%",
        height: 380, // Aumentei um pouco para cobrir melhor telas maiores
        position: "absolute",
        top: 0,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        paddingTop: 60, // Ajuste para descer um pouco mais da barra de status
    },
    headerIcon: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 24,
        fontWeight: "400",
    },
    card: {
        width: "90%",
        maxWidth: 400,
        backgroundColor: "#FFFFFF",
        borderRadius: 35, // Bordas mais arredondadas para combinar com a imagem
        paddingHorizontal: 30,
        paddingBottom: 35,
        marginTop: 220,
        elevation: 10,
        shadowColor: "#004B66", // Sombra azul escura em vez de preta para harmonizar
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        alignItems: "center",
    },
    avatarContainer: {
        marginTop: -65,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: 130,
        height: 130,
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#7E9CE3",
        marginBottom: 12,
    },
    desc: {
        fontSize: 13, // Aumentei um ponto para legibilidade
        color: "#9AA9C4",
        textAlign: "center",
        lineHeight: 20,
        marginBottom: 25,
        paddingHorizontal: 5,
    },
    amountContainer: {
        backgroundColor: "#F6F8FB", // Fundo super sutil
        width: "100%",
        borderRadius: 20,
        paddingVertical: 15,
        alignItems: "center",
        marginBottom: 25,
    },
    valor: {
        fontSize: 42,
        color: "#27CA71",
        fontWeight: "bold",
        letterSpacing: -1,
    },
    underline: {
        height: 2,
        backgroundColor: "#A0B5E8", // Azul suavizado
        width: "50%",
        marginTop: 8,
        borderRadius: 2,
    },
    input: {
        borderWidth: 1.5,
        borderColor: "#E2E8F0",
        backgroundColor: "#FAFAFA", // Fundo do input levemente destacado do branco
        width: "100%",
        height: 120,
        padding: 18,
        borderRadius: 15,
        marginBottom: 30,
        fontSize: 13,
        color: "#334155",
    },
    botao: {
        backgroundColor: "#18C66B",
        width: "100%",
        paddingVertical: 18,
        borderRadius: 25,
        alignItems: "center",
        elevation: 4,
        shadowColor: "#18C66B", // Sombra colorida gera um efeito de "brilho"
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
    },
    botaoTexto: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        letterSpacing: 1.5, // Maior espaçamento nas letras para ficar mais sofisticado
    }
});