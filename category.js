import React, { Component } from "react";
import { connect } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

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
} from "react-native";

const windowHeight = Dimensions.get("window").height;

function Meat({ route, navigation, ctr, onIncrementCounter }) {
  return (
    <View>
      <View style={styles.header}>
        <MaterialIcons
          name="menu"
          size={28}
          // onPress={openMenu}
          style={styles.icon1}
        />
        <EvilIcons style={styles.icon2} name="cart" size={27} />
        <AntDesign style={styles.icon3} name="search1" size={24} />
        <View>
          <Text style={styles.headerText}>{ctr[route.params.catId].name}</Text>
        </View>
      </View>
      <ImageBackground
        style={{
          width: "100%",
          height: 210,
          marginTop: -80,
          zIndex: 2,
          backgroundColor: "black",
          opacity: 0.6,
        }}
        source={{
          uri: ctr[route.params.catId].category_img,
        }}
      />
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {ctr[route.params.catId].products.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={{
                  width: "45%",
                  borderBottomWidth: 2,
                  borderColor: "#CCC",
                  borderRightWidth: item.id % 2 ? 2 : 0,
                }}
                onPress={() =>
                  navigation.navigate("SingleItem", {
                    catId: route.params.catId,
                    itemId: item.id,
                  })
                }
              >
                <View key={item.id}>
                  <Image
                    style={{
                      height: 100,
                      width: "80%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: 10,
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
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text style={{ marginLeft: 5, fontFamily: "poppins" }}>
                    {item.weight}
                  </Text>
                  <Text style={{ marginLeft: 5, fontFamily: "poppins" }}>
                    {item.price}
                  </Text>
                  <Ionicons
                    style={{ position: "absolute", bottom: 10, right: 10 }}
                    name="add-circle"
                    size={24}
                    color="#CCC"
                  />
                </View>
              </TouchableOpacity>
            );
          })}
          {/* <View
            style={{
              width: "45%",
              borderBottomWidth: 2,
              borderColor: "#CCC",
              borderRightWidth: 2,
            }}
          >
            <Image
              style={{
                height: 100,
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              source={{
                uri:
                  "https://gazef.s3.us-west-2.amazonaws.com/task-assets/Crispy-Fried-Chicken_exps6445_PSG143429D03_05_5b_RMS.jpg",
              }}
            ></Image>
            <Text
              style={{
                marginLeft: 5,
                fontFamily: "poppins",
                fontSize: 22,
                fontWeight: "bold",
              }}
            >
              aaaaaa
            </Text>
            <Text style={{ marginLeft: 5, fontFamily: "poppins" }}>
              aaaaaaaa
            </Text>
            <Text style={{ marginLeft: 5, fontFamily: "poppins" }}>aaaaa</Text>
            <Ionicons
              style={{ position: "absolute", bottom: 10, right: 10 }}
              name="add-circle"
              size={24}
              color="#CCC"
            />
          </View> */}
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#D95500",
          position: "absolute",
          paddingBottom: 15,
          top: windowHeight - 15,
        }}
      >
        <Text
          style={{
            color: "#FFF",
            fontFamily: "poppins",
            fontSize: 25,
            width: "50%",
            textAlign: "center",
          }}
        >
          Sort
        </Text>
        <Text
          style={{
            color: "#FFF",
            fontFamily: "poppins",
            fontSize: 25,
            width: "50%",
            textAlign: "center",
          }}
        >
          Filter
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
    color: "white",
    letterSpacing: 1,
    position: "relative",
    bottom: 9,
  },
  icon1: {
    position: "absolute",
    left: 20,
    bottom: 0,
    color: "#fff",
    paddingBottom: 10,
  },
  icon2: {
    position: "absolute",
    right: 20,
    bottom: 0,
    color: "#fff",
    paddingBottom: 10,
  },
  icon3: {
    position: "absolute",
    right: 58,
    bottom: 0,
    color: "#fff",
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

export default connect(mapStateToProps, mapDispatchToProps)(Meat);
