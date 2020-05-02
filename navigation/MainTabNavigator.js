import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import DustbinDetail from "../screens/DustbinDetail";
import ProfileScreen from "../screens/ProfileScreen";
import StatsScreen from "../screens/StatsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";
const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Bindetail: DustbinDetail
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Network",
  tabBarIcon: ({ focused }) => <Ionicons name="ios-globe" size={32} />
};

HomeStack.path = "";

const StatsStack = createStackNavigator(
  {
    Stats: StatsScreen
  },
  config
);

StatsStack.navigationOptions = {
  tabBarLabel: "Stats",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-stats" : "md-stats"}
    />
  )
};

StatsStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "History",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-calendar" : "md-options"}
    />
  )
};

SettingsStack.path = "";

const Profile = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  config
);
Profile.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-options"}
    />
  )
};

Profile.path = "";
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  StatsStack,
  SettingsStack,
  Profile
});

tabNavigator.path = "";

export default tabNavigator;
