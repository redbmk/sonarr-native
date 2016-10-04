import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {BLUE} from '../../constants/brand';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  basicContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  modalContainer: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    padding: 22,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: BLUE,
  },
  notificationText: {

  },
});

export default class NotificationWrapper extends Component { // eslint-disable-line
  static propTypes = {
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.basicContainer}>
          <View style={styles.modalContainer}>
            <Text style={styles.notificationText}>foo</Text>
          </View>
        </View>
      </View>
    );
  }
}
