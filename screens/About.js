import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { developers } from '../constants/items';

export default class About extends React.Component {
  renderRowCircle() {}
  renderDevelLog(project, index) {
    console.log(project);
    return (
      <View style={styles.develogContainer} key={index}>
        <View>
          <Text>{project.version}</Text>
        </View>
        <View>
          <View></View>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.aboutContainer}>
        {developers.map((project, index) =>
          this.renderDevelLog(project, index)
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    alignItems: 'center'
  }
});
