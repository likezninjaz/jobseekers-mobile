import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import Calendar from "../Calendar/Calendar.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Calendar: { screen: Calendar }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
