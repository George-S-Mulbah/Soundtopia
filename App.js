import { StatusBar } from 'expo-status-bar';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './app/screens/OnboardingScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { useFonts } from 'expo-font';
import {Chewy_400Regular} from '@expo-google-fonts/chewy'
import { useState } from 'react';
import { useEffect } from 'react';
import AyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  useEffect(async() => {
    const appData = await AyncStorage.getItem("isAppFirstLaunched");
    console.log(appData);
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AyncStorage.setItem('isAppFirsLaunched','false')
    } else {
      setIsAppFirstLaunched(false);
    }
    },[])
  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>   
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAppFirstLaunched && (
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
          )}
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
      </Stack.Navigator>
   </NavigationContainer>
    // <View style={styles.container}>
    //   <Text style={{fontFamily:"Chewy_400Regular"}}>Hi I am Negan</Text>
    // </View>
   )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
