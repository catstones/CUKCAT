import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>CUKCAT</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('About')}
        >
          <MaterialIcons
            name="help"
            size={Math.floor(width * 0.07)}
            color="#CCBC8F"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    width,
    height: Math.floor(height * 0.07),
    paddingLeft: Math.floor(width * 0.06),
    paddingRight: Math.floor(width * 0.06),
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTitle: {
    color: '#0C2E86',
    fontSize: Math.floor(width * 0.065),
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold'
  }
});
