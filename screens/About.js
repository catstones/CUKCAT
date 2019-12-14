import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.aboutContainer}>
        <View style={styles.memberContainer}>
          <View style={styles.versionBox}>
            <Text style={styles.versionTitle}>#Version 1.0.0</Text>
          </View>
          <View style={styles.memberBox}>
            <Image
              style={{
                width: Math.floor(width * 0.133),
                height: Math.floor(width * 0.133),
              }}
              source={require("../assets/subin.png")}
            />
            <View style={styles.memberDescription}>
              <Text style={styles.memberName}>An Subin</Text>
              <Text style={styles.memberDescriptionText}>
                ▶ Backend Developer
              </Text>
              <Text style={styles.memberDescriptionText}>
                ▶ Application and Database Manager
              </Text>
            </View>
          </View>
          <View style={styles.memberBox}>
            <Image
              style={{
                width: Math.floor(width * 0.133),
                height: Math.floor(width * 0.133),
              }}
              source={require("../assets/yeongchan.png")}
            />
            <View style={styles.memberDescription}>
              <Text style={styles.memberName}>Han YeongChan</Text>
              <Text style={styles.memberDescriptionText}>
                ▶ Frontend Developer
              </Text>
              <Text style={styles.memberDescriptionText}>
                ▶ Application and Database Manager
              </Text>
            </View>
          </View>
          <View style={styles.memberBox}>
            <Image
              style={{
                width: Math.floor(width * 0.133),
                height: Math.floor(width * 0.133),
              }}
              source={require("../assets/jinwoo.png")}
            />
            <View style={styles.memberDescription}>
              <Text style={styles.memberName}>Park JinWoo</Text>
              <Text style={styles.memberDescriptionText}>
                ▶ Frontend and Backend Supporter
              </Text>
              <Text style={styles.memberDescriptionText}>
                ▶ Application Security Manager
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
  },
  memberContainer: {
    marginTop: Math.floor(width * 0.09),
  },
  memberBox: {
    width: Math.floor(width * 0.88),
    margin: Math.floor(width * 0.026),
    padding: Math.floor(width * 0.013),
    // backgroundColor: "blue",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  memberName: {
    fontSize: Math.floor(width * 0.048),
    fontWeight: "bold",
  },
  memberDescription: {},
  memberDescriptionText: {
    paddingLeft: Math.floor(width * 0.026),
  },
  versionBox: {
    marginLeft: Math.floor(width * 0.045),
  },
  versionTitle: {
    fontSize: Math.floor(width * 0.04),
  },
});
