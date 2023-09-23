import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
const{width, height} = Dimensions.get('window');
export default function parah() {
  return (
     
    <View  style={styles.div}>
        <Text>What is Lorem Ipsum?</Text>
        <Text style={styles.text}>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. Lorem Ipsum has been the industry's
 standard dummy text ever since the 1500s, when an unknown printer took a
  galley of type and scrambled it to make a type specimen book. It has survived not 
  only five centuries, but also the leap into electronic typesetting, remaining essentially 
  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
   Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum</Text>
    </View>
  )
}


const styles = StyleSheet.create({

    div:{
        width: "98%",
        height: height * 0.3,
        marginTop: -90,
      
    },

    text:{

        textAlign:"justify"
    }


})
