import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import _ from 'underscore';
import NoticeList from '../components/NoticeList';

export default class Notice extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ backgroundColor: 'transparent' }} />
        <NoticeList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    alignItems: 'center'
  }
});
