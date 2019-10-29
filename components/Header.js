import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>CUKCAT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    width,
    height: Math.floor(height * 0.07),
    paddingLeft: Math.floor(width * 0.06),
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTitle: {
    color: '#0C2E86',
    fontSize: Math.floor(width * 0.06),
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold'
  }
});
