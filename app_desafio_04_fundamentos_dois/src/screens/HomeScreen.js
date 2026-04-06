import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import PortalHeader from "../components/PortalHeader";
import SectionTitle from "../components/SectionTitle";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";
import { newsData } from "../data/newsData";
import { APP_TEXTS } from "../constants/texts";
import { Colors } from "../theme/colors";
import { Spacing } from "../theme/spacing";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <PortalHeader />

            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <SectionTitle title={APP_TEXTS.sectionTitle} />

                {newsData.map((newsItem) => (
                    <NewsCard
                        key={newsItem.id}
                        category={newsItem.category}
                        title={newsItem.title}
                        date={newsItem.date}
                    />
                ))}
            </ScrollView>

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
    content: {
        flex: 1,
    },
    contentContainer: {
        paddingBottom: Spacing.xl,
    },
});