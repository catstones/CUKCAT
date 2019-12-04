import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { about } from "../constants/items";

const developers = about[0];

const renderMember = ({ name, role }) => (
  <View key={name}>
    <Text>
      {name}: {role}
    </Text>
  </View>
);

export default () => (
  <View style={styles.aboutContainer}>
    <Text>{developers.version}</Text>

    <View>{developers.members.map(renderMember)}</View>

    <Text>깔아주셔서 감사합니다.</Text>
  </View>
);

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
