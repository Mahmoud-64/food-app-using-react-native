import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFonts } from "expo-font";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { connect } from "react-redux";

var payLoad = 0;
function Details({ title, navigation, ctr, onIncrementCounter }) {
  let [fontsLoaded] = useFonts({
    poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  });
  console.log("PPPPPPPPPPPP PPrPPPPPPPPPPPPPPPPPPPPPPpPPP", ctr);
  useEffect(() => {
    if (ctr == 0) {
      axios
        .get("https://5bcce576cf2e850013874767.mockapi.io/task/categories")
        .then((res) => {
          const persons = res.data;
          // console.log(res.data);
          payLoad = res.data;
          onIncrementCounter();
          console.log("GGG GGGGGGGGG", ctr);
        });
    } else {
      console.log("HHHHHHHHHHHHHHHHHHHH", ctr);
    }
  });
  const images = {
    images: [
      require("./assets/images/a2.png"),
      require("./assets/images/a2.png"),
      require("./assets/images/a2.png"),
    ],
  };

  const sectors = [
    { url: require("./assets/images/a1.png"), key: 1 },
    { url: require("./assets/images/a3.png"), key: 3 },
    { url: require("./assets/images/a4.png"), key: 4 },
    { url: require("./assets/images/a5.png"), key: 5 },
    { url: require("./assets/images/a6.png"), key: 6 },
  ];
  if (fontsLoaded) {
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
            <Text style={styles.headerText}></Text>
          </View>
        </View>
        <SliderBox
          circleLoop
          dotColor="#D95500"
          sliderBoxHeight={250}
          images={images.images}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* @@@ */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Category", { catId: 2 })}
          >
            <Image style={styles.item0} source={sectors[4].url} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Category", { catId: 0 })}
          >
            <Image style={styles.item0} source={sectors[1].url} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <Image style={styles.item} source={sectors[0].url} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Category", { catId: 3 })}
          >
            <Image style={styles.item} source={sectors[3].url} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Category", { catId: 1 })}
          >
            <Image style={styles.item} source={sectors[2].url} />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return <Text>loading ...</Text>;
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 53,
    width: "100%",
    backgroundColor: "#DDD",
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
  icon1: {
    position: "absolute",
    left: 20,
    bottom: 0,
    color: "#1d81c3",
    paddingBottom: 10,
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
    marginTop: 0,
    borderRadius: 8,
  },
  item0: {
    margin: 5,
    borderRadius: 8,
  },
});

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT", payLoad: payLoad }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
