import React from "react";
import { BarChart, XAxis } from 'react-native-svg-charts' // 2.1.0

import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function StatsScreen() {
  const data    = [ 14, -1, 100, -95, -94, -24, -8, 85, -91, 35, -53, 53, -78, 66, 96, 33, -26, -32, 73, 8 ]
  const barData = [
      {
          values: data,
          positive: {
              fill: 'rgb(134, 65, 244)',
          },
          negative: {
              fill: 'rgba(134, 65, 244, 0.2)',
          },
      },
  ]
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.child}>
        <Text >
         Total  Distance Covered : 5km 
        </Text> 
          
      </View> 
      <View style={styles.child}>
        <Text>
         Total number of trips : 3
        </Text>   

      </View>  
      <View style={styles.child}>
        <Text>
    No. of bins emptied : 15 
        </Text>   
      </View> 
      <View style={styles.child}>
        <Text>
          total waste collected:2.45kg 
        </Text>   

      </View>
    
      </View>
    
                
    </ScrollView>
  );
}

StatsScreen.navigationOptions = {
  title: "Stats"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
    overflow:'scroll'
  },
  child:{
    borderWidth:1,
    borderColor:'black',
    borderRadius:10,
    color:'green',
    padding:10,
    margin:7,

  }
  ,
  Text:{

  }
});
