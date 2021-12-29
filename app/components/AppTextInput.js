import React from 'react';
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles"
function AppTextInput({ icon, width = "100%",padding ,...otherProps }) {
  return (
    <View style={[styles.container, { width },{padding}]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 20,
    marginVertical: 10,
    elevation: 10,
    
  },
  icon: {
    marginRight: 0,
    paddingVertical: 10,
    paddingLeft:5,
  },
});

export default AppTextInput;