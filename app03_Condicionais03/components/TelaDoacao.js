import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function TelaDoacao() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Fundo Azul Superior simulando a tela inteira */}
                <View style={styles.topBackground}>
                    <View style={styles.header}>
                        <Text style={styles.headerIcon}>⟨</Text>
                        <Text style={styles.headerIcon}>🔍</Text>
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

                    {/* Área de Texto Multi-linha */}
                    <TextInput
                        placeholder="ENTER TEXT HERE"
                        placeholderTextColor="#A0A0A0"
                        style={styles.input}
                        multiline={true}
                        textAlignVertical="top"
                    />

                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoTexto}>DONATE</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDF5D3", // Fundo amarelado (referência das bordas do anexo)
    },
    scrollContent: {
        flexGrow: 1,
        alignItems: "center",
    },
    topBackground: {
        backgroundColor: "#00CDEB", // Ciano vibrante
        width: "100%",
        height: 350,
        position: "absolute",
        top: 0,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        paddingTop: 50,
    },
    headerIcon: {
        color: "rgba(255,255,255,0.7)",
        fontSize: 22,
        fontWeight: "300",
    },
    card: {
        width: "92%",
        maxWidth: 400,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 30,
        paddingBottom: 40,
        marginTop: 200, // Empurra o card para baixo, mantendo o fundo azul visível
        elevation: 10, // Sombra no Android
        shadowColor: "#000", // Sombra no iOS
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.15,
        shadowRadius: 15,
        alignItems: "center",
        marginBottom: 30,
    },
    avatarContainer: {
        marginTop: -65, // Puxa o avatar para fora do card (sobrepondo o azul)
        marginBottom: 15,
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
        color: "#7E9CE3", // Azul claro do título
        marginBottom: 12,
    },
    desc: {
        fontSize: 12,
        color: "#A5B4CB", // Cinza azulado
        textAlign: "center",
        lineHeight: 18,
        marginBottom: 30,
        paddingHorizontal: 5,
    },
    amountContainer: {
        backgroundColor: "#F4F6FB", // Fundo levemente cinza/azul
        width: "100%",
        borderRadius: 25,
        paddingVertical: 18,
        alignItems: "center",
        marginBottom: 25,
    },
    valor: {
        fontSize: 42,
        color: "#27CA71", // Verde exato da imagem
        fontWeight: "bold",
        letterSpacing: -1,
    },
    underline: {
        height: 2,
        backgroundColor: "#8AA3D6", // Linha azul abaixo do valor
        width: "60%",
        marginTop: 5,
    },
    input: {
        borderWidth: 1.5,
        borderColor: "#DCE3F0",
        width: "100%",
        height: 110, // Altura ampliada para text area
        padding: 18,
        borderRadius: 15,
        marginBottom: 30,
        fontSize: 12,
        color: "#4A4A4A",
    },
    botao: {
        backgroundColor: "#18C66B",
        width: "100%",
        paddingVertical: 18,
        borderRadius: 25,
        alignItems: "center",
        elevation: 2,
        shadowColor: "#18C66B",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    botaoTexto: {
        color: "#fff",
        fontWeight: "400",
        fontSize: 20,
        letterSpacing: 1,
    }
});