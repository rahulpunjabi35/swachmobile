import React from "react";
// import MapView, { Marker, Callout } from "react-native-maps";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Button,
  Image,
} from "react-native";
//import data from "../assets/data/markerdata";
export default class HomeScreen extends React.Component {
  buttonPress = (marker) => {
    this.props.navigation.navigate("Bindetail", {
      marker: marker,
    });
    alert(marker.lat);
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 19.0269,
            longitude: 72.8553,
            latitudeDelta: 0.1995,
            longitudeDelta: 0.0821
          }}
          zoomEnabled={true}
          zoomControlEnabled={true}
        >
          {this.state.markers.map(marker => (
            <Marker
              coordinate={{ latitude: marker.lat, longitude: marker.lng }}
            >
              <Image
                style={styles.mstyle}
                source={require("../assets/images/rubbish-bin.png")}
              />
              <Callout
                style={styles.callout}
                onPress={() => {
                  this.props.navigation.navigate("Bindetail", {
                    itemId: marker.location,
                    fill: marker.fill,
                    otherParam: "anything you want here"
                  });
                }}
                flat={true}
              >
                <View>
                  <Text>location:{marker.location}</Text>
                  <Text>Fill level:{marker.fill}</Text>
                  <Button title="more info" />
                </View>
              </Callout>
            </Marker>
          ))}
          <View style={styles.content}>
          <Text style={styles.textColor}> Report a problem</Text>
          </View>
        </MapView> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // mapStyle: {
  //   width: Dimensions.get("window").width,
  //   height: Dimensions.get("window").height,
  //   marginTop: 150
  // },
  callout: {
    width: 150,
  },
  mstyle: {
    width: 20,
    height: 35,
  },
  content: {
    position: "absolute",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "black",
    bottom: 120,
    padding: 10,
    marginLeft: 100,
  },
  textColor: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
HomeScreen.navigationOptions = {
  header: null,
};
