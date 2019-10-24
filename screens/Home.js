import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Modal,
  Text,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import MainInfo from '../components/MainInfo';
import LinkTable from '../components/LinkTable';
import BusBtnTable from '../components/BusBtnTable';
import FoodBtnTable from '../components/FoodBtnTable';
import * as WebBrowser from 'expo-web-browser';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const images = [
  {
    key: 1,
    source:
      'https://firebasestorage.googleapis.com/v0/b/cukcat-aacfa.appspot.com/o/dddd.png?alt=media&token=3b68ac2a-87f8-493d-8177-22abcad64e51'
  },
  {
    key: 2,
    source:
      'http://mblogthumb4.phinf.naver.net/MjAxNzAxMjVfMjYz/MDAxNDg1MzQ5NjIxMDk2.LoOsq-oSKIn8NXlulM_4-IiNogTFTTZCwMiOCy1e154g.m7bYXYxlfqBvg9VM1MHqzaWqf1elVpakw_sJYZ5_c4gg.PNG.oyaubihime/025Pikachu_OS_anime_11.png?type=w800'
  },
  {
    key: 3,
    source:
      'https://firebasestorage.googleapis.com/v0/b/cukcat-aacfa.appspot.com/o/dddd.png?alt=media&token=3b68ac2a-87f8-493d-8177-22abcad64e51'
  }
];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalTitle: null
    };
  }
  openFoodModal() {
    this.setState({ modalVisible: true, modalTitle: '학식정보' });
  }
  openBusModal() {
    this.setState({ modalVisible: true, modalTitle: '버스정보' });
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ backgroundColor: 'transparent' }} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: Math.floor(height * 0.07), //실제 header 높이
              flex: 1,
              paddingLeft: Math.floor(width * 0.06),
              backgroundColor: 'transparent',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                color: '#0C2E86',
                fontSize: Math.floor(width * 0.09),
                fontWeight: 'bold',
                fontFamily: 'Roboto-Bold'
              }}
            >
              CUKCAT
            </Text>
          </View>
          <Modal
            visible={this.state.modalVisible}
            transparent={true}
            animationType="fade"
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalBox}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}>
                    {this.state.modalTitle}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({ modalVisible: false, modalTitle: null })
                    }
                    style={{
                      marginBottom: 5
                    }}
                  >
                    <FontAwesome
                      name={'times'}
                      size={Math.floor(width * 0.075)}
                      color={'#6A6A6A'}
                    />
                  </TouchableOpacity>
                </View>
                {this.state.modalTitle == '버스정보' ? (
                  <BusBtnTable />
                ) : (
                  <FoodBtnTable />
                )}
              </View>
            </View>
          </Modal>
          <MainInfo
            openBusModal={() => this.openBusModal()}
            openFoodModal={() => this.openFoodModal()}
          />
          <LinkTable />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FBFBFB'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBox: {
    width: Math.floor(width * 0.912),
    height: Math.floor(width * 0.64),
    padding: Math.floor(width * 0.04),
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15
  },
  modalHeader: {
    width: '100%',
    height: Math.floor(width * 0.11),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#6A6A6A'
  },
  modalHeaderText: {
    fontSize: Math.floor(width * 0.05),
    fontWeight: 'bold',
    color: '#6A6A6A'
  }
});
