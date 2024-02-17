/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.containerStyle}>
        <View style={[styles.cards, styles.cardOne]}>
            <Text style={styles.textStyle}>One</Text>
        </View>
        <View style={[styles.cards, styles.cardTwo]}>
            <Text style={styles.textStyle}>Two</Text>
        </View>
        <View style={[styles.cards, styles.cardThree]}>
            <Text style={styles.textStyle}>Three</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    containerStyle: {
        flex:1,
        flexDirection: 'row',
        padding: 10,
    },
    cards: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,

    },
    cardOne: {
        backgroundColor: '#265073',
    },
    cardTwo: {
        backgroundColor: '#2D9596',
    },
    cardThree: {
        backgroundColor: '#9AD0C2',
    },
    textStyle: {
        textAlign: 'center',
        color: '#fff',
    },
});
