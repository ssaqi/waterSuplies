import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/Components/SignUp/SignUp';
import Signup2 from './src/Components/SignUp/Signup2';
import Login from './src/Components/Login/Login';
import Forget from './src/Components/Forget/ForgetPass';
import Code from './src/Components/SendCode/Sendcode';
import Pass from './src/Components/ConfromPassword/ConfromPassword';
import Post from './src/Components/HopitalSide/Postshift';
import PostPanel from './src/Components/HopitalSide/PostPanel';
import shiftSummary from './src/Components/HopitalSide/shiftSummary';
import ApplicantShifts from './src/Components/HopitalSide/ApplicantShifts';
const Stack = createNativeStackNavigator();
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (    
    <>

<NavigationContainer>
      <Stack.Navigator  
      screenOptions={{headerShown:false}} 
      >
        <Stack.Screen name="Care Giver / RA" component={SignUp} />
        <Stack.Screen name="Care Home" component={Signup2} />
        <Stack.Screen name="signin" component={Login} />
        <Stack.Screen name="Forget Password" component={Forget} />
        <Stack.Screen name="Code" component={Code} />
        <Stack.Screen name="New Password" component={Pass} />
        <Stack.Screen name="Post Shits" component={Post} />
        <Stack.Screen name="post Panel" component={PostPanel} />
        <Stack.Screen name="shifts" component={shiftSummary} />
        <Stack.Screen name="ApplicantShift" component={ApplicantShifts} />
      </Stack.Navigator>
    </NavigationContainer>

    </>
  )
}
