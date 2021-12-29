import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik'


function AppFormField({ name , ...otherProps }) {
  
  const {
    setFieldTouched,
    errors,
    touched,
  } = useFormikContext();
  return (
   
    <>
            <AppTextInput
         
              onBlur={()=>setFieldTouched("email")}    
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