import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, CheckBox } from "react-native"
const { width, height } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/FontAwesome';
function SignUp({ navigation }) {
  return (
    <View style={styles.main}>
      <View style={styles.form}>

            <Text style={styles.heading}>Sign in</Text>

        <View style={styles.field}>
          <TextInput style={styles.inp}
            placeholder="Email Address"
            placeholderTextColor={"grey"}
            placeholderTextSize={30}

          >
          </TextInput>

          <TextInput style={styles.inp}
            placeholder="Password"
            placeholderTextColor={"grey"}
            placeholderTextSize={30}

          >
          </TextInput>

        </View>
        <View style={styles.checkBoxDiv}>
          <Text style={styles.policy}>
          <Text style={{ color: "#FF66C3" }}
          onPress={()=> navigation.navigate('Forget Password')}
         >
          Forget Password
        </Text>
        </Text>
        </View>
        <View style={styles.btnDiv}>
          <TouchableOpacity style={styles.bttn}>
            <Text style={styles.text}>Sign in </Text>
          </TouchableOpacity>
        </View>


      </View>


    </View>
  )
}

const styles = StyleSheet.create({

  main: {
    width: "100%",
    height: height * 1.1,
    backgroundColor: "pink",
    display: "flex",
    alignItems: "center"

  },
  form: {
    width: width * 0.9,
    height: height * 0.5,
    backgroundColor: "#fff",
    marginTop: height * 0.15,
    borderRadius: 20,
  },
  
  heading:{
    fontSize: 28,
    color: "#FF66C3",
    fontWeight: "500",
    textAlign: "center",
    marginTop: height * 0.03,

  },

  btn: {
    width: width * 0.8,
    height: height * 0.06,
    borderRadius: 50,
    left: 20,
    marginTop: height * 0.03,
    display: "flex",
    flexDirection: "row",
    backgroundColor:"#fff",

    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
   
  },


  inp: {
    width: width * 0.7,
    borderBottomWidth: 0.2,
    borderColor: "black",
    marginLeft: width * 0.43,
    marginTop: 5,
    fontSize:19,
    color:"#BFBBBB",
    fontWeight:"400"

  },
  field: {
    width: "50%",
    alignItems: "center",
    marginTop: height * 0.05,
  },

  btnDiv: {
    width: width * 0.9,
    height: height * 0.4,
    display: "flex",
    alignItems: "center"
  },
  bttn: {
    width: '50%',
    height: 40,
    backgroundColor: "#FF66C3",
    borderRadius: 5,
    marginTop: height * 0.04,

  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
    marginTop: height * 0.004,

  },
  checkBoxDiv: {
    alignItems: "center",
    marginTop: height * 0.004,
  },
  policy: {
    fontSize: 17,
    marginTop: 3,
    marginTop: height * 0.01,
    left: 70
  },
  btn1: {
    width: width * 0.36,
    height: height * 0.052,
    backgroundColor: "#FF66C3",
    left: 5,
    borderRadius: 20,
    marginTop: 2
  },
  btn2: {
    width: width * 0.36,
    height: height * 0.052,
    backgroundColor: "#FFD7EF",
    left: 23,
    borderRadius: 20,
    marginTop: 2
  },
  text1: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "400",
    textAlign: "center",
    marginTop: height * 0.011,
  },
  text2: {
    fontSize: 16,
    color: "#FF66C3",
    fontWeight: "400",
    textAlign: "center",
    marginTop: height * 0.011,
  }
})

export default SignUp