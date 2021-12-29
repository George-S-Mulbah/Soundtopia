import React from 'react';
import { View, StyleSheet , Text} from 'react-native';
import AppText from './AppText';

function ErrorMessage({ error , touch }) {

    if (!touch||!error) return null
    return (
        <AppText style={styles.error}>{error}</AppText>
  );
}

const styles = StyleSheet.create({
    container: {},
    error: {
        color:"red",
    }
    
});

export default ErrorMessage;