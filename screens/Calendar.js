import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import HaksaCalendar from '../components/HaksaCalendar';

export default class CalendarCUK extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ backgroundColor: 'transparent' }} />
        <HaksaCalendar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA'
  }
});
