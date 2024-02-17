/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCards() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                       uri:'https://th-thumbnailer.cdn-si-edu.com/jzm3Sdi-A4nHAwY_q8LAoOVMKJc=/1072x720/filters:no_upscale():focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>The Taj Mahal</Text>
                    <Text style={styles.cardLabel}>Agra, Uttar Pradesh</Text>
                    <Text style={styles.cardDesc}>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal.</Text>
                    <Text style={styles.cardFooter}>Agra, Uttar Pradesh</Text>

                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    card: {
        height: 600,
        width: 400,
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center'
    },
    cardElevated: {
        backgroundColor: '#F2EFE5',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    cardImage: {
        height: 300,
        width: 300,
        borderRadius: 8,
        margin: 15,
        marginBottom: 30,
    },
    cardBody: {
        margin: 10,
    },
    cardTitle: {
        color:'#211C6A',
        fontSize: 20,
        marginBottom: 3,
        fontWeight: '500',
    },
    cardLabel:{
        color:'#211C6A',
        fontSize: 15,
        marginBottom: 3,


    },
    cardDesc: {
        color:'#211C6A',
        fontSize: 18,
        marginBottom: 3,


    },
    cardFooter: {
        color:'#211C6A',
        fontSize: 15,

    },
});
