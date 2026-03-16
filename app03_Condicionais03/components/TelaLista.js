import { useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// Componente reutilizável para os itens da lista
const ListItem = ({ title, description, avatarUrl, progressWidth }) => (
    <View style={styles.item}>
        <View style={styles.avatarContainer}>
            <Image
                source={{ uri: avatarUrl }}
                style={styles.avatar}
            />
        </View>

        <View style={styles.itemContent}>
            <Text style={styles.titulo}>{title}</Text>
            <Text style={styles.desc}>{description}</Text>

            <View style={styles.progressBar}>
                <View style={[styles.progress, { width: progressWidth }]} />
            </View>
        </View>
    </View>
);

export default function TelaLista() {
    // Estados para a busca e para o chip (filtro) ativo
    const [pesquisa, setPesquisa] = useState("");
    const [filtroAtivo, setFiltroAtivo] = useState("Education"); // Inicia com Education selecionado

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.card} showsVerticalScrollIndicator={false}>

                {/* Header: Avatar + Search Bar */}
                <View style={styles.header}>
                    <View style={styles.profileCircle} />

                    <View style={styles.searchContainer}>
                        <Text style={styles.searchIcon}>🔍</Text>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search"
                            placeholderTextColor="#AEC4EB"
                            value={pesquisa}
                            onChangeText={setPesquisa}
                            autoCorrect={false}
                        />
                    </View>
                </View>

                {/* Chips / Categorias Interativos */}
                <View style={styles.chipsContainer}>

                    {/* Chip: Education */}
                    <TouchableOpacity
                        style={[styles.chipBase, filtroAtivo === "Education" ? styles.chipActive : styles.chipInactive]}
                        onPress={() => setFiltroAtivo("Education")}
                        activeOpacity={0.7}
                    >
                        <Text style={filtroAtivo === "Education" ? styles.chipTextActive : styles.chipTextInactive}>
                            🎓 Education
                        </Text>
                    </TouchableOpacity>

                    {/* Chip: Ícone Mais */}
                    <TouchableOpacity
                        style={[styles.chipIconBase, filtroAtivo === "Add" ? styles.chipActive : styles.chipInactive]}
                        onPress={() => setFiltroAtivo("Add")}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.chipIconText}>✚</Text>
                    </TouchableOpacity>

                    {/* Chip: Planta */}
                    <TouchableOpacity
                        style={[styles.chipIconBase, filtroAtivo === "Plant" ? styles.chipActive : styles.chipInactive]}
                        onPress={() => setFiltroAtivo("Plant")}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.chipIconText}>🌱</Text>
                    </TouchableOpacity>

                    {/* Chip: Patinhas */}
                    <TouchableOpacity
                        style={[styles.chipIconBase, filtroAtivo === "Pets" ? styles.chipActive : styles.chipInactive]}
                        onPress={() => setFiltroAtivo("Pets")}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.chipIconText}>🐾</Text>
                    </TouchableOpacity>

                </View>

                {/* Subheader: Results + Filter */}
                <View style={styles.resultsRow}>
                    <Text style={styles.resultsText}>300 Results</Text>
                    <Text style={styles.resultsText}>News ⌄</Text>
                </View>

                {/* Lista de Itens */}
                <ListItem
                    title="Lorem ipsum dolor sit"
                    description="amet, consectetuer adipiscing elit, sed diam nonummy nibh."
                    avatarUrl="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                    progressWidth="65%"
                />
                <ListItem
                    title="Lorem ipsum dolor sit"
                    description="amet, consectetuer adipiscing elit, sed diam nonummy nibh."
                    avatarUrl="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                    progressWidth="85%"
                />

                {/* Card Destaque Inferior */}
                <View style={styles.featuredCard}>
                    <View style={styles.featuredBanner}>
                        <Image
                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png" }}
                            style={styles.graduationImage}
                        />
                    </View>
                    <View style={styles.featuredTextRow}>
                        <Text style={styles.featuredText}>
                            <Text style={styles.boldText}>Lorem ipsum dolor sit</Text> amet, consectetuer adipiscing.
                        </Text>
                        <Text style={styles.featuredText}>
                            <Text style={styles.boldText}>Lorem ipsum dolor sit</Text> amet, consectetuer adipiscing.
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDF5D3",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        width: "100%",
        maxWidth: 400,
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        padding: 24,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 25,
    },
    profileCircle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#AEC4EB",
        marginRight: 12,
    },
    searchContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#5C85D6",
        height: 44,
        borderRadius: 22,
        paddingHorizontal: 16,
    },
    searchIcon: {
        fontSize: 16,
        marginRight: 8,
        color: "#AEC4EB",
    },
    searchInput: {
        flex: 1,
        color: "#FFFFFF",
        fontSize: 15,
        height: "100%",
    },
    chipsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 25,
    },

    /* ESTILOS DOS CHIPS INTERATIVOS */
    chipBase: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    chipIconBase: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
    },
    chipActive: {
        backgroundColor: "#00C4CC", // Cor Ciano de destaque para o chip clicado
    },
    chipInactive: {
        backgroundColor: "#84AEE8", // Azul claro original para os chips não selecionados
    },
    chipTextActive: {
        color: "#FFFFFF",
        fontWeight: "700",
        fontSize: 14,
    },
    chipTextInactive: {
        color: "#FFFFFF", // O texto/ícone continua branco, mas o fundo muda
        fontWeight: "500",
        fontSize: 14,
    },
    chipIconText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    /* FIM DOS ESTILOS DOS CHIPS */

    resultsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    resultsText: {
        color: "#9AA9C4",
        fontSize: 13,
        fontWeight: "500",
    },
    item: {
        flexDirection: "row",
        marginBottom: 24,
        alignItems: "center",
    },
    avatarContainer: {
        width: 75,
        height: 75,
        borderRadius: 37.5,
        marginRight: 16,
        overflow: "hidden",
        backgroundColor: "#00C4CC",
    },
    avatar: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    itemContent: {
        flex: 1,
    },
    titulo: {
        fontWeight: "700",
        color: "#5C85D6",
        fontSize: 15,
        marginBottom: 4,
    },
    desc: {
        fontSize: 12,
        color: "#9AA9C4",
        lineHeight: 18,
    },
    progressBar: {
        height: 6,
        backgroundColor: "#DCE5F5",
        borderRadius: 3,
        marginTop: 8,
        width: "100%",
    },
    progress: {
        height: 6,
        backgroundColor: "#00D26A",
        borderRadius: 3,
    },
    featuredCard: {
        marginTop: 10,
    },
    featuredBanner: {
        backgroundColor: "#7DB5F2",
        height: 180,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
    graduationImage: {
        width: 90,
        height: 90,
        tintColor: "#FFFFFF",
    },
    featuredTextRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    featuredText: {
        flex: 1,
        fontSize: 12,
        color: "#9AA9C4",
        lineHeight: 18,
        marginHorizontal: 4,
    },
    boldText: {
        fontWeight: "700",
        color: "#5C85D6",
    }
});