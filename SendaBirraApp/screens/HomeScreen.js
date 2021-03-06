import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { CustomHeader } from '../components/CustomHeader.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
      <CustomHeader titleText = "Sensores"/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text> sensor 1</Text>
        <Text> sensor 2</Text>
        <Text> sensor 3</Text>

        </ScrollView>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  }
});
