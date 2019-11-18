import React from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
import { Calendar } from "react-native-calendars";
import { markedHaksa, listedHaksa } from "../constants/items";
import _ from "underscore";

const { width } = Dimensions.get("window");

export default class HaksaCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      haksaItems: [],
      locked: true
    };
  }
  componentDidMount() {
    this.findHaksaList(new Date().toISOString().substr(0, 10));
  }
  findHaksaList(date) {
    let todayHaksaList = _.where(listedHaksa, { startDate: date });
    todayHaksaList = _.uniq(
      todayHaksaList.concat(_.where(listedHaksa, { endDate: date }))
    );
    this.setState({ haksaItems: todayHaksaList });
  }
  renderHaksaList(haksaItems) {
    if (!haksaItems.length) {
      return (
        <View
          style={{
            width: Math.floor(width * 0.8),
            height: Math.floor(width * 0.85),
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 25, color: "#828282" }}>일정이 없어요</Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          {haksaItems.map((item, index) => (
            <View style={styles.haksaListContainer} key={index}>
              <View style={styles.haksaTimeContainer}>
                <View style={styles.haksaTimeBlock}>
                  <Text style={styles.haksaTimeText}>{item.startDate}</Text>
                </View>
                <Text>~</Text>
                <View style={styles.haksaTimeBlock}>
                  <Text style={styles.haksaTimeText}>{item.endDate}</Text>
                </View>
              </View>
              <View style={styles.haksaContentContainer}>
                <View style={styles.haksaTypeBlock}>
                  <Text style={styles.haksaTypeText}>학사일정</Text>
                </View>
                <View style={styles.haksaTitleBlock}>
                  <Text style={styles.haksaTitleText}>{item.title}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      );
    }
  }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Calendar
          onDayPress={day => {
            this.findHaksaList(day.dateString);
          }}
          monthFormat={"yyyy년 MM월"}
          markingType={"simple"}
          theme={{
            calendarBackground: "#FFF",
            textSectionTitleColor: "#0C2E86",
            dayTextColor: "black",
            todayTextColor: "#1AC7C3",
            monthTextColor: "black",
            indicatorColor: "#0C2E86",
            arrowColor: "black"
          }}
          markedDates={markedHaksa}
          hideArrows={false}
        />
        <View
          style={{
            backgroundColor: "#EAEAEA",
            flex: 1,
            alignItems: "center"
          }}
        >
          {this.renderHaksaList(this.state.haksaItems)}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  haksaListContainer: {
    width: Math.floor(width * 0.85),
    backgroundColor: "#FFF",
    marginTop: 20,
    borderRadius: 5,
    padding: 5
  },
  haksaTimeContainer: {
    width: "100%",
    height: Math.floor(width * 0.065),
    flexDirection: "row",
    alignItems: "center"
  },
  haksaTimeBlock: {
    width: Math.floor(width * 0.25),
    height: Math.floor(width * 0.06),
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0efed",
    padding: 5
  },
  haksaTimeText: {},
  haksaContentContainer: {
    width: "100%",
    height: Math.floor(width * 0.2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  haksaTypeBlock: {
    width: Math.floor(width * 0.17),
    height: Math.floor(width * 0.17),
    borderRadius: Math.floor(width * 0.17),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7dc8f"
  },
  haksaTypeText: {},
  haksaTitleBlock: {
    width: Math.floor(width * 0.6),
    height: Math.floor(width * 0.14),
    padding: 5,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  haksaTitleText: {}
});
