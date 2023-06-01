import React, { Component } from "react";
import { Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomTabNavigator } from "./tabnavigator";
import Profile from "../screens/profile";
const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="home" component={BottomTabNavigator} />
        <Drawer.Screen name="profile" component={Profile} />
      </Drawer.Navigator>
    );
  }
}
