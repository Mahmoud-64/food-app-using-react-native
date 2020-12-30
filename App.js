import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IntroSlide from "./introSlider";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartPage from "./startPage";
import Category from "./category";
import SingleItem from "./SingleItem";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./reducer";
import { connect } from "react-redux";
import axios from "axios";

const store = createStore(Reducer);

export default class App extends React.Component {
  state = {
    appIsReady: false,
  };
  constructor(props) {
    super(props);

    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="StartPage">
            <Stack.Screen
              name="IntroSlide"
              options={{ headerShown: false }}
              component={IntroSlide}
            />
            <Stack.Screen
              name="StartPage"
              options={{ headerShown: false }}
              component={StartPage}
            />
            <Stack.Screen
              name="Category"
              options={{ headerShown: false }}
              component={Category}
            />
            <Stack.Screen
              name="SingleItem"
              options={{ headerShown: false }}
              component={SingleItem}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
    return <IntroSlide></IntroSlide>;
  }
}
const Stack = createStackNavigator();

const styles = StyleSheet.create({});
