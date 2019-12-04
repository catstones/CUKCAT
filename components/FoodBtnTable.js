import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

const { width } = Dimensions.get("window");

const Button = ({ icon, color, onPress, children }) => (
  <View>
    <TouchableOpacity
      style={[styles.busBtn, { borderColor: color }]}
      onPress={() => onPress()}
    >
      <FontAwesome name={icon} color={color} size={Math.floor(width * 0.13)} />
      <Text style={[styles.busBtnText, { color: color }]}>{children}</Text>
    </TouchableOpacity>
  </View>
);

const URL_STUDENT_RESTRAUNT =
  "https://www.catholic.ac.kr/common_pdf/www/53963_20191030154022112.pdf";
const URL_DORMITORY_RESTRAUNT =
  "https://www.catholic.ac.kr/common_pdf/www/53963_20191030154022112.pdf";
const URL_OFFICERS_RESTRAUNT =
  "https://www.catholic.ac.kr/common_pdf/www/53963_20191030154022112.pdf";

const openBrwoser = url => WebBrowser.openBrowserAsync(url);

export default () => (
  <View style={styles.busBtnTableContainer}>
    <Button
      icon="bus"
      color="#5D7BBE"
      onPress={() => openBrwoser(URL_STUDENT_RESTRAUNT)}
    >
      학생식당
    </Button>
    <Button
      icon="bus"
      color="#5D7BBE"
      onPress={() => openBrwoser(URL_DORMITORY_RESTRAUNT)}
    >
      교직원식당
    </Button>
    <Button
      icon="bed"
      color="#5D7BBE"
      onPress={() => openBrwoser(URL_OFFICERS_RESTRAUNT)}
    >
      기숙사식당
    </Button>
  </View>
);

const styles = StyleSheet.create({
  busBtnTableContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  busBtn: {
    width: Math.floor(width * 0.25),
    height: Math.floor(width * 0.25),
    paddingTop: Math.floor(width * 0.016),
    borderRadius: 35,
    borderWidth: Math.floor(width * 0.02),
    justifyContent: "space-around",
    alignItems: "center",
  },
  busBtnText: {
    fontSize: Math.floor(width * 0.04),
    fontWeight: "bold",
  },
});
