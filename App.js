import { StatusBar } from 'expo-status-bar';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './app/screens/OnboardingScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { useState } from 'react';
import { useEffect } from 'react';
import AyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './app/screens/LoginScreen';
import { useFonts, Chewy_400Regular } from '@expo-google-fonts/chewy';

import Icon from './app/components/Icon';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';
import RegisterScreen from './app/screens/RegisterScreen';
import AuthNavigator from './navigation/AuthNavigator';

const Stack = createStackNavigator();
export default function App() {

  let [fontsLoaded] = useFonts({
    Chewy_400Regular,
  });

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


  if (!fontsLoaded) {
    return null;
  } else {
    return (
      isAppFirstLaunched != null && (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAppFirstLaunched && (
              <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
            )}
            <Stack.Screen name="WelcomeScreen" component={AuthNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    );
  }
  
  
 
    
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
