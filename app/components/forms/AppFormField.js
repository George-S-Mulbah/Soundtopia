import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik'
import { KeyboardAvoidingView } from 'react-native-web';


function AppFormField({ name , ...otherProps }) {
  
  const {
    setFieldTouched,
    handleChange ,
    errors,
    touched,
  } = useFormikContext();
  return (
   
    <>
    
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
              {...otherProps}
                      />
        <ErrorMessage error={errors[name]} touch={touched[name]} />
        
      
      

      
      </>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AppFormField;