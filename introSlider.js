// import introSlide from "./App";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

//import AppIntroSlider to use it
import AppIntroSlider from "react-native-app-intro-slider";
// ########################################################################
const IntroSlide = ({ navigation }) => {
  const [showRealApp, setShowRealApp] = useState(false);
  const showSkipButton = false;
  let [fontsLoaded] = useFonts({
    poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  });
  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const renderNextButton = () => {
    return (
      <FontAwesomeIcon
        size={45}
        style={styles.nextButton}
        icon={faChevronCircleRight}
      />
    );
  };

  const renderPrevButton = () => {
    return (
      <FontAwesomeIcon
        size={45}
        style={styles.nextButton}
        icon={faChevronCircleLeft}
      />
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.done}>
        <Text style={styles.doneLabell}>Get Started</Text>
      </View>
    );
  };

  const RenderItem = ({ item }) => {
    if (fontsLoaded) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "space-around",
            paddingBottom: 100,
          }}
        >
          <Image style={styles.introImageStyle} source={item.image} />
          <Text style={styles.introTitleStyle}>{item.title}</Text>
          <Text style={styles.introTextStyle}>{item.text}</Text>
        </View>
      );
    }
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="go to details"
              onPress={() => navigation.navigate("Details")}
            />
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          onSkip={onSkip}
          showPrevButton={true}
          showDoneButton={true}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          renderDoneButton={renderDoneButton}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          doneLabel="Get Started"
        />
      )}
    </>
  );
};

export default IntroSlide;

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  done: {
    color: "#D95500",
    backgroundColor: "#D95500",
    borderRadius: 50,
  },
  doneLabell: {
    color: "#fff",
    backgroundColor: "#D95500",
    borderRadius: 50,
    padding: 10,
  },
  dotStyle: {
    width: 15,
    height: 15,
    borderRadius: 40,
    color: "#fff",
    backgroundColor: "#fff",
    borderColor: "#D95500",
    borderStyle: "solid",
    borderWidth: 2,
  },
  nextButton: {
    color: "#D95500",
    marginBottom: 0,
  },

  activeDotStyle: {
    color: "#D95500",
    width: 15,
    height: 15,
    borderRadius: 40,
    backgroundColor: "#D95500",
    borderColor: "#D95500",
    borderStyle: "solid",
    borderWidth: 2,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    width: 230,
    height: 230,
    marginTop: 120,
    marginBottom: -20,
  },
  introTextStyle: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    paddingVertical: 30,
    paddingHorizontal: 30,
    marginTop: -90,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },
});

const slides = [
  {
    key: "s1",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    title: "Mobile Recharge",
    image: require("/home/mahmoud/Desktop/test/3/my-app/assets/images/slider1.png"),
    backgroundColor: "#fff",
  },
  {
    key: "s2",
    title: "Flight Booking",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: require("/home/mahmoud/Desktop/test/3/my-app/assets/images/slider2.png"),
    backgroundColor: "#fff",
  },
  {
    key: "s3",
    title: "Great Offers",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: require("/home/mahmoud/Desktop/test/3/my-app/assets/images/slider3.png"),
    backgroundColor: "#fff",
  },
];
