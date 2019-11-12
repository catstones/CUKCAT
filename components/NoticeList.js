import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  AsyncStorage,
  TouchableOpacity,
  Modal
} from 'react-native';
import _ from 'underscore';

import * as WebBrowser from 'expo-web-browser';
import { AntDesign } from '@expo/vector-icons';
import firebaseApp from '../firebaseApp';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const db = firebaseApp.firestore();
const now = new Date();
const oneWeekAgo = new Date(now - 604800000);

export default class NoticeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noticeItem: [],
      noticeType: '최근공지'
    };
  }
  getFireBaseData() {
    db.collection('Notice')
      .where('writtenAt', '<=', now)
      .where('writtenAt', '>=', oneWeekAgo)
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot.size);
        let newList = [];
        querySnapshot.forEach(doc => {
          newList.push({ ...doc.data(), key: doc.id.toString() });
        });
        newList = _.sortBy(newList, 'writtenAt').reverse();
        this.setState({ noticeItem: newList });
      });
  }
  _handlePressButtonAsync = async url => {
    await WebBrowser.openBrowserAsync(url);
  };
  componentDidMount() {
    this.getFireBaseData();
  }
  render() {
    return (
      <View style={styles.noticeListContainer}>
        <View style={styles.noticeTitle}>
          <FontAwesome
            name="search"
            size={Math.floor(width * 0.06)}
            color="#FFB549"
          ></FontAwesome>
          <View
            style={{
              width: Math.floor(width * 0.8),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end'
            }}
            onPress={() => this.setState({ modalVisible: true })}
          >
            <Text
              style={{
                fontSize: Math.floor(width * 0.037),
                color: '#7F7F7F',
                fontWeight: 'bold',
                paddingLeft: 5
              }}
            >
              {this.state.noticeType}
            </Text>
            <Text style={styles.itemWrittenAt}>
              ※ {oneWeekAgo.toISOString().substr(0, 10)} ~
              {now.toISOString().substr(0, 10)}
            </Text>
          </View>
        </View>
        <FlatList
          data={this.state.noticeItem}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => this._handlePressButtonAsync(item.URL)}
              style={styles.noticeItemArea}
            >
              <View style={styles.itemIconArea}>
                <AntDesign
                  name="notification"
                  size={Math.floor(width * 0.06)}
                  color="#707070"
                ></AntDesign>
              </View>
              <View style={styles.itemTextArea}>
                <View style={styles.itemBoardArea}>
                  <Text style={styles.itemBoardId}>{item.board}</Text>
                  <Text style={styles.itemWrittenAt}>
                    {new Date(item.writtenAt.seconds * 1000)
                      .toISOString()
                      .substr(0, 10)}
                  </Text>
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  noticeListContainer: {
    padding: Math.floor(width * 0.02),
    paddingBottom: 0,
    width: Math.floor(width * 0.9),
    flex: 1
  },
  noticeTitle: {
    paddingBottom: Math.floor(width * 0.015),
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderColor: '#DEDEDE',
    fontSize: Math.floor(width * 0.04),
    color: '#7F7F7F',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },
  noticeItemArea: {
    height: Math.floor(width * 0.17),
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  itemIconArea: {
    height: Math.floor(width * 0.15),
    width: Math.floor(width * 0.15),
    borderRadius: Math.floor(width * 0.15),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#B6B6B6',
    backgroundColor: '#DEDEDE'
  },
  itemTextArea: {
    width: Math.floor(width * 0.64),
    height: Math.floor(width * 0.15)
  },
  itemBoardArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 1,
    borderBottomWidth: 1.5,
    borderBottomColor: '#D6D6D6'
  },
  itemBoardId: {
    fontSize: Math.floor(width * 0.03),
    paddingRight: 8,
    fontWeight: 'bold',
    color: '#334856'
  },
  itemWrittenAt: {
    fontSize: Math.floor(width * 0.025),
    color: '#798186'
  },
  itemTitle: {
    flex: 1,
    width: Math.floor(width * 0.64),
    fontSize: Math.floor(width * 0.034),
    paddingTop: 5,
    color: '#51636F',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  noticeTypeTitle: {
    fontSize: 13,
    fontWeight: 'bold'
  }
});
