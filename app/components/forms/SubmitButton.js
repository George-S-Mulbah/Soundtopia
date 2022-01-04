import React from 'react';
import { View, StyleSheet } from 'react-native';
import {useFormikContext} from 'formik'
import AppButton from '../AppButton';


function SubmitButton({ title }) {
    
    const {
        handleSubmit
      } = useFormikContext();
  return (
    <AppButton title={title} elevation={10} color="black" textColor="primary" onPress={handleSubmit}/>

    );
}

const styles = StyleSheet.create({
  container: {}
});

export default SubmitButton;