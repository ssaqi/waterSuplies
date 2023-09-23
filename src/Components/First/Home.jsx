import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
const {width, height} = Dimensions.get('window');


export default function Home() {
  return (
    <View style={styles.main}>
     <Text style={styles.text}>SAQIB ABBAS</Text>
    </View>
  )
}


const styles = StyleSheet.create({

  main:{
      width:"100%",
      height: height * 0.05,
      backgroundColor: "blue",
      display: "flex",
      alignItems:"center"
  },
  text:{

    color: "white",
    fontWeight: '600',
    fontSize: 18
  }
})
