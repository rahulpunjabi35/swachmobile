import React from "react";
import { View, Text } from "react-native";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };
  render() {
    return (
      <View>
        <Text>ProfileScreen</Text>
      </View>
    );
  }
}
export default ProfileScreen;
