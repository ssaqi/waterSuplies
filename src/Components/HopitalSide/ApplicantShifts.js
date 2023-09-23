import React from 'react'
import {View,StyleSheet,Dimensions,Text} from 'react-native';
const {width,height}=Dimensions.get("window");
function ApplicantShifts() {
  return (
    <View style={styles.main}>
            <Text style={styles.heading}>
            How would you like to post this shift?
            </Text>
            </View>
  )
}


const styles = StyleSheet.create({

    main:{
    
         width: "100%",
         height: height * 11,
         backgroundColor: "#fff",
         display: "flex",
         alignItems:"center"
    },
    heading:{
        fontSize: 16,
        color: "#FF66C3",
        fontWeight: "500",
        marginRight: width * 0.2,
        marginTop : height * 0.02
    
      },

})    




export default ApplicantShifts