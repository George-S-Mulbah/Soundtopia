import React from 'react';
import { View, StyleSheet ,Text , Image } from 'react-native';

import Screen from '../components/Screen';
import * as Yup from 'yup'
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("password")
    
})
function LoginScreen(props) {
    
  return (
      <Screen style={styles.container}>
          <Image
              style={styles.logo}
              source={require('../assets/background.png')}
          />

     <AppForm
              initialValues={{ email : '' , password :'' }}
              onSubmit={values => console.log(values)}
              validationSchema={validationSchema}
          >
                
        
               <AppFormField
               autoCorrect={false}
                name = "email"
                icon="email"
                KeyboardType="email-address"     
                placeholder="Email"
                textContentType="emailAddress"
                      />
              <AppFormField
                autoCorrect={false}
                name="email"
                autoCapitalize="none"
                icon="lock"
                KeyboardType="email-address"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                       />
                      
                    
         <SubmitButton title="Login" />
          </AppForm>
               
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 5  ,
    
    },
    logo: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom:20,
    }});

export default LoginScreen;