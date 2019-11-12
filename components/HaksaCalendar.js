import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { markedHaksa, listedHaksa } from '../constants/items';
import _ from 'underscore';

const { width } = Dimensions.get('window');

export default class HaksaCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      haksaItems: [],
      locked: true
    };
  }
  findHaksaList(date) {
    let todayHaksaList = _.where(listedHaksa, { startDate: date });
    todayHaksaList = _.uniq(
      todayHaksaList.concat(_.where(listedHaksa, { endDate: date }))
    );
    // console.log(todayHaksaList);
    this.setState({ haksaItems: todayHaksaList });
  }
  renderHaksaList(haksaItems) {
    console.log(haksaItems);
    if (!haksaItems.length) {
      return (
        <View>
          <Text>일정이 없어요</Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          {haksaItems.map((item, index) => (
            <View style={styles.haksaListBlock} key={index}>
              <Text>
                {item.startDate} ~ {item.endDate}
              </Text>
              <Text>{item.title}</Text>
            </View>
          ))}
        </View>
      );
    }
  }
  render() {
    // console.log(this.state.haksaItems);
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Calendar
          onDayPress={day => {
            this.findHaksaList(day.dateString);
          }}
          monthFormat={'yyyy년 MM월'}
          markingType={'simple'}
          theme={{
            calendarBackground: '#FFF',
            textSectionTitleColor: 'blue',
            dayTextColor: 'black',
            todayTextColor: 'blue',
            selectedDayTextColor: 'white',
            monthTextColor: 'black',
            indicatorColor: 'blue',
            selectedDayBackgroundColor: '#333248',
            arrowColor: 'black'
          }}
          markedDates={markedHaksa}
          hideArrows={false}
        />
        <View
          style={{
            backgroundColor: '#EAEAEA',
            flex: 1,
            alignItems: 'center'
          }}
        >
          {this.renderHaksaList(this.state.haksaItems)}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  haksaListBlock: {
    width: Math.floor(width * 0.85),
    backgroundColor: '#FFF',
    marginTop: 20
  }
});
