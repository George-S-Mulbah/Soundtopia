import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import colors from '../config/colors';

function Icon({
    name,
    size=40,
    backgroundColor="#000",
    iconColor = "#fff",
}) {
  return (
    <View style={{width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
          alignItems: 'center'
      }}>
      <MaterialCommunityIcons name={name} size={size*0.5}  color={iconColor} />   
      </View>
  );
}

const styles = StyleSheet.create({
  container:{}
});

export default Icon;