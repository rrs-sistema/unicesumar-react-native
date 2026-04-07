import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import PortalHeader from "../components/PortalHeader";
import SectionTitle from "../components/SectionTitle";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";
import { newsData } from "../data/newsData";
import { APP_TEXTS } from "../constants/texts";
import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";

export default function HomeScreen() {
    const renderItem = ({ item }) => (
        <NewsCard
            category={item.category}
            title={item.title}
            date={item.date}
        />
    );

    return (
        <View style={styles.container}>
            <PortalHeader />

            <View style={styles.contentArea}>
                <SectionTitle title={APP_TEXTS.sectionTitle} />

                <FlatList
                    data={newsData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                />
            </View>

            <Footer
                authors={APP_TEXTS.authors}
                date={APP_TEXTS.deliveryDate}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    contentArea: {
        flex: 1,
    },
    listContent: {
        paddingBottom: Spacing.md,
    },
});