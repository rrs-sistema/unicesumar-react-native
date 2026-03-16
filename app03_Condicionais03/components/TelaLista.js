import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

// Componente reutilizável para os itens da lista
const ListItem = ({ title, description, avatarColor, progressWidth }) => (
    <View style={styles.item}>
        <View style={[styles.avatarContainer, { backgroundColor: avatarColor }]}>
            <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png" }}
                style={styles.avatar}
                resizeMode="contain"
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
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.card} showsVerticalScrollIndicator={false}>

                {/* Header: Avatar + Search Bar */}
                <View style={styles.header}>
                    <View style={styles.profileCircle} />
                    <View style={styles.searchBar}>
                        <Text style={styles.searchText}>🔍 Search</Text>
                    </View>
                </View>

                {/* Chips / Categorias */}
                <View style={styles.chipsContainer}>
                    <View style={[styles.chip, styles.chipActive]}>
                        <Text style={styles.chipTextActive}>🎓 Education</Text>
                    </View>
                    <View style={styles.chipIcon}><Text style={styles.chipIconText}>✚</Text></View>
                    <View style={styles.chipIcon}><Text style={styles.chipIconText}>🌱</Text></View>
                    <View style={styles.chipIcon}><Text style={styles.chipIconText}>🐾</Text></View>
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
                    avatarColor="#00C4CC" // Ciano/Teal
                    progressWidth="60%"
                />
                <ListItem
                    title="Lorem ipsum dolor sit"
                    description="amet, consectetuer adipiscing elit, sed diam nonummy nibh."
                    avatarColor="#84AEE8" // Azul Claro
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
        backgroundColor: "#FDF5D3", // Cor de fundo amarelada das bordas do anexo
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
        marginBottom: 20,
    },
    profileCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#AEC4EB",
        marginRight: 12,
    },
    searchBar: {
        flex: 1,
        backgroundColor: "#5C85D6",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    searchText: {
        color: "#E0E8F5",
        fontSize: 14,
    },
    chipsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    chip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    chipActive: {
        backgroundColor: "#00C4CC",
    },
    chipTextActive: {
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: 14,
    },
    chipIcon: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#84AEE8",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
    },
    chipIconText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
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
        borderRadius: 16,
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: 16,
        overflow: "hidden",
    },
    avatar: {
        width: 60,
        height: 60,
        bottom: -5,
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
        lineHeight: 16,
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
        width: 100,
        height: 100,
        tintColor: "#DDF1FF", // Aplica um tom de azul claro na imagem
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