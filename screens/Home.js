import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Modal,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import MainTable from "../components/MainTable";
import LinkTable from "../components/LinkTable";
import BusBtnTable from "../components/BusBtnTable";
import FoodBtnTable from "../components/FoodBtnTable";
import Header from "../components/Header";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalTitle: null,
    };
  }
  openFoodModal() {
    this.setState({ modalVisible: true, modalTitle: "학식정보" });
  }
  openBusModal() {
    this.setState({ modalVisible: true, modalTitle: "버스정보" });
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ backgroundColor: "transparent" }} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header navigation={this.props.navigation} />
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
                      this.setState({
                        modalVisible: false,
                        modalTitle: null,
                      })
                    }
                    style={{
                      marginBottom: 5,
                    }}
                  >
                    <FontAwesome
                      name={"times"}
                      size={Math.floor(width * 0.075)}
                      color={"#6A6A6A"}
                    />
                  </TouchableOpacity>
                </View>
                {this.state.modalTitle === "버스정보" ? (
                  <BusBtnTable />
                ) : (
                  <FoodBtnTable />
                )}
              </View>
            </View>
          </Modal>
          <MainTable
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
    alignItems: "center",
    backgroundColor: "#FBFBFB",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: Math.floor(width * 0.912),
    height: Math.floor(width * 0.64),
    padding: Math.floor(width * 0.04),
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
  },
  modalHeader: {
    width: "100%",
    height: Math.floor(width * 0.11),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#6A6A6A",
  },
  modalHeaderText: {
    fontSize: Math.floor(width * 0.05),
    fontWeight: "bold",
    color: "#6A6A6A",
  },
});
