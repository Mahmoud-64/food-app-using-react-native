import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { block } from "react-native-reanimated";
const windowHeight = Dimensions.get("window").height;
function SingleItem({ route, navigation, ctr, onIncrementCounter }) {
  const [qty, setQty] = useState(0);

  let item = {};
  const category = route.params.catId;
  const itemidfromparam = +route.params.itemId;
  //   console.log(
  //     "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
  //     category,
  //     itemidfromparam
  //   );
  if (category == 0) {
    item = ctr[category].products[+itemidfromparam - 1];
  }
  if (category == 1) {
    item = ctr[category].products[+itemidfromparam - 5];
  }
  if (category == 2) {
    item = ctr[category].products[+itemidfromparam - 9];
  }
  if (category == 3) {
    item = ctr[category].products[itemidfromparam - 13];
  }
  //   console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", item);
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="cart"
            size={27}
            style={styles.icon1}
            name="chevron-back-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <EvilIcons style={styles.icon2} name="cart" size={27} />
        <AntDesign style={styles.icon3} name="search1" size={24} />
        <View>
          <Text style={styles.headerText}>{item.name}</Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 90,
        }}
      >
        <View
          style={{
            width: "70%",
          }}
        >
          <Image
            style={{
              height: 120,
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            source={{
              uri: item.product_img,
            }}
          ></Image>

          <Text
            style={{
              marginLeft: 5,
              fontFamily: "poppins",
              fontSize: 22,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 35,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              marginLeft: 5,
              fontFamily: "poppins",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            {item.weight}
          </Text>
          <Text
            style={{
              marginLeft: 5,
              fontFamily: "poppins",
              textAlign: "center",
              fontSize: 30,
            }}
          >
            {item.price}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 50,
          marginLeft: 30,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            style={{ fontFamily: "poppins", fontSize: 22, marginRight: 40 }}
          >
            QTY
          </Text>
          <NumericInput
            totalWidth={80}
            totalHeight={30}
            iconStyle={{ color: "black" }}
            onChange={(value) => setQty(value)}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontFamily: "poppins", fontSize: 22 }}>Total</Text>
          <Text
            style={{
              fontFamily: "poppins",
              fontSize: 22,
              marginLeft: 25,
              color: "#D95500",
            }}
          >
            EGP {qty * +item.price.substring(0, item.price.length - 2)}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontFamily: "poppins", color: "#C1C1C1" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#D95500",
          position: "absolute",
          left: 20,
          right: 20,
          borderRadius: 5,
          top: windowHeight - 50,
        }}
      >
        <Text
          style={{
            color: "#FFF",
            fontFamily: "poppins",
            fontSize: 20,
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          ADD TO CHART
        </Text>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
  };
};

const styles = StyleSheet.create({
  header: {
    zIndex: 3,
    paddingTop: 53,
    width: "100%",
    // height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  back: {
    position: "absolute",
    left: 20,
    bottom: 0,
    color: "#1d81c3",
    paddingBottom: 10,
  },
  icon1: {
    color: "#1d81c3",
  },
  icon2: {
    position: "absolute",
    right: 20,
    bottom: 0,
    color: "#1d81c3",
    paddingBottom: 10,
  },
  icon3: {
    position: "absolute",
    right: 58,
    bottom: 0,
    color: "#1d81c3",
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  item: {
    margin: 5,
    borderRadius: 8,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
