import React from "react";
import { View, Text, Button, Settings } from "react-native";
export default class DustbinDetail extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Bin Detail Screen</Text>
        <Text>Location: {navigation.getParam("itemId", "NO-ID")}</Text>
        <Text>
          Fill level
          {JSON.stringify(navigation.getParam("fill", "default value"))}
        </Text>
        <Button
          title="Go to maps again"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }
}
//packager-info.json
// {
//   "devToolsPort": 19002,
//   "expoServerPort": 19000,
//   "packagerPort": 19001,
//   "packagerPid": 10948,
//   "expoServerNgrokUrl": null,
//   "packagerNgrokUrl": null,
//   "ngrokPid": null
// }
//Settings.json
// {
//   "hostType": "lan",
//   "lanType": "ip",
//   "dev": true,
//   "minify": false,
//   "urlRandomness": "u8-bax",
//   "https": false
// }
