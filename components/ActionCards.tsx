/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Actions() {

  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }


  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={styles.secContainer}>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in UP</Text>
        </View>
        <Image
          source={{
            uri: 'https://img.etimg.com/thumb/msid-72397914,width-640,height-480,imgsize-397645,resizemode-4/up-in-fast-lane.jpg'
          }}
          style={styles.imgStyle}
        />
        <View style={styles.cardBody}>
          <Text style={styles.descStyle} numberOfLines={4}>
            UP already has the longest expressway in the country linking Delhi to Lucknow via the connected Yamuna Expressway and Lucknow Expressway, helping motorists cover the 500-km stretch in about 6 hours.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://economictimes.indiatimes.com/industry/transportation/roadways/these-expressways-will-shorten-the-distances-in-uttar-pradesh/up-in-fast-lane/slideshow/72397914.cms')}>
            <Text style={styles.linkStyle}>Read More...</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in UP</Text>
        </View>
        <Image
          source={{
            uri: 'https://img.etimg.com/thumb/msid-72397914,width-640,height-480,imgsize-397645,resizemode-4/up-in-fast-lane.jpg'
          }}
          style={styles.imgStyle}
        />
        <View style={styles.cardBody}>
          <Text style={styles.descStyle} numberOfLines={4}>
            UP already has the longest expressway in the country linking Delhi to Lucknow via the connected Yamuna Expressway and Lucknow Expressway, helping motorists cover the 500-km stretch in about 6 hours.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://economictimes.indiatimes.com/industry/transportation/roadways/these-expressways-will-shorten-the-distances-in-uttar-pradesh/up-in-fast-lane/slideshow/72397914.cms')}>
            <Text style={styles.linkStyle}>Read More...</Text>
          </TouchableOpacity>
        </View>

      </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F1FADA',
    margin: 10,
    borderRadius: 8,
    padding: 10,
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
    width: '50%',
    height: '50%',
  },
  secContainer: {
    flex: 1,
    flexDirection:'row'
  },
  elevatedCard: {},
  headingContainer: {
    marginVertical: 10,
  },
  headerText: {
    fontSize: 15,
    fontWeight:'300',
    color: '#1D24CA',
  },
  imgStyle: {
    height: 200,
    width: 200,
  },
  cardBody: {
    marginVertical: 10,
    padding: 10,
  },
  descStyle: {},
  footerContainer: {},
  linkStyle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#201658'
  },
});
