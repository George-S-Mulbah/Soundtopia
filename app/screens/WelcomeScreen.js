import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,

} from 'react-native';
import routes from '../../navigation/routes';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';

import colors from "../config/colors";

function WelcomeScreen({navigation}) {
  return (
    
    <Screen style={styles.container}>
      
      <Image
              style={styles.logo}
              source={require('../assets/welcome.png')}
          />
      
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" color="black" textColor="primary"  onPress={()=>navigation.navigate(routes.REGISTER)}/>
        <AppButton title="Register" color="transparent" textColor="black" borderColor="black" onPress={()=>navigation.navigate(routes.REGISTER)}/>
      </View>
      </Screen>

  );
}

const styles = StyleSheet.create({

  container: {
   padding:5, 
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    top:200,
    padding: 20,
    width: "100%",
  },
    logo: {
      width: 250,
      height: 250,
      alignSelf: 'center',
      marginTop: 50,
      marginBottom:20,
  }
  ,
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;