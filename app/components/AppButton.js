import React from 'react';
import { View, StyleSheet ,TouchableOpacity ,Text} from 'react-native';
import colors from '../config/colors';
function AppButton({ title, onPress, color = "primary" , textColor ,borderColor,elevation=0}) {
    return (
      <TouchableOpacity
        style={[styles.button, {
          backgroundColor: colors[color],
          borderColor: colors[borderColor],
          borderWidth: 1,
          elevation:elevation,
        }]}
        onPress={onPress} >
        <Text style={[styles.text],{color:colors[textColor],fontFamily:'Chewy_400Regular'}}>{title}</Text>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10,
      },
      text: {
        color: colors.white,
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: "bold",
        fontFamily:'Chewy_400Regular'
        
      },
});

export default AppButton;