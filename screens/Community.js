import * as React from "react";
import { SafeAreaView, View } from "react-native";
import { WebView } from "react-native-webview";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ backgroundColor: "transparent" }} />
        <WebView
          source={{
            uri: "http://www.cukstudent.com/main/main.php",
          }}
        />
      </View>
    );
  }
}
