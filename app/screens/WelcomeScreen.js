import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,

} from 'react-native';
import routes from '../../navigation/routes';
import AppButton from '../components/AppButton';

import colors from "../config/colors";

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
        blurRadius={2}
            style={styles.background}
      source={require('../assets/welcome.png')}>

      <View style={styles.buttonsContainer}>
        <AppButton title="Login" color="black" textColor="primary"  onPress={()=>navigation.navigate(routes.LOGIN)}/>
        <AppButton title="Register" color="transparent" textColor="primary" borderColor="black" onPress={()=>navigation.navigate(routes.REGISTER)}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
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