/* eslint-disable prettier/prettier */
import { SafeAreaView, ScrollView } from 'react-native';
import React, { Component } from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import Actions from './components/ActionCards';
import ContactList from './components/ContactList';

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCards/>
        <Actions/>
        <ContactList/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
