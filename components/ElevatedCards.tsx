/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>scroll</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>anc</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>view</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>magic</Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>😀</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default ElevatedCards;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    container: {
        padding: 10,
    },
    card: {
        width: 100,
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
        borderRadius: 4,
        margin: 8,
    },
    elevatedCard: {
        backgroundColor: '#E493B3',
        elevation: 4,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowColor: '#8E7AB5',
        shadowRadius: 5,
    },
});
