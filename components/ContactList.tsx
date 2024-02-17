/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {

    const contacts = [
        {
            id: 1,
            name: 'John Doe',
            status: 'Available',
            picturename: 'https://cdn.truelancer.com/user-picture/2082822-5fedccbf1f929.jpg',
        },
        {
            id: 2,
            name: 'Jane Smith',
            status: 'Busy',
            picturename: 'https://cdn.truelancer.com/user-picture/1787363-647d44a1c6fb9.jpg',
        },
        {
            id: 3,
            name: 'Alice Johnson',
            status: 'Offline',
            picturename: 'https://cdn.truelancer.com/user-picture/3426585-65c63a8d9c21d.jpg',
        },
        {
            id: 4,
            name: 'Umang Gupta',
            status: 'Offline',
            picturename: 'https://cdn.truelancer.com/user-picture/3193163-63035ef249af5.jpg',
        },
    ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}
      scrollEnabled={false}
      > 
      {contacts && contacts.map((item, index) => (
        <View key={item.id} style={styles.contactStyle}>
            <Image source={{uri: item.picturename}} style={styles.imgStyle}/>
            <View style={styles.textStyle}>
                <Text style={styles.nameStyle}>{item.name}</Text>
                <Text style={styles.statusStyle}>{item.status}</Text>
            </View>

        </View>
      ))}
      </ScrollView>

    </View>
  );
};

export default ContactList;

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
        backgroundColor: '#C6DCBA',
        margin: 10,
        borderRadius: 8,
      },
      contactStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
      },
      imgStyle: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2,

      },
      textStyle: {
        marginHorizontal: 20,
      },
      nameStyle: {
        fontSize: 18,
        fontWeight: '600',
      },
      statusStyle: {
        fontSize: 15,
        fontWeight: '300',
      },
});
