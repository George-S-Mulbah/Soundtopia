import React from 'react';
import { View, StyleSheet ,Text , Image, TextInput } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import colors from '../config/colors';
import { Formik } from 'formik';
import Screen from '../components/Screen';
import * as Yup from 'yup'
import ErrorMessage from '../components/ErrorMessage'
import AppFormField from '../components/AppFormField';

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

         <Formik
              initialValues={{ email : '' , password :'' }}
              onSubmit={values => console.log(values)}
              validationSchema={validationSchema}
          >
              {({handleChange,handleSubmit,errors,setFieldTouched,touched}) => (
                  <> 
        

          <AppFormField
              name="email"
              autoCapitalize="none"
              autoCorrect ={false}            
              placeholder="Email"
              icon="email"
              textContentType="emailAddress"
                      />
          <AppFormField
              name="password"
              autoCorrect ={false}            

              autoCapitalize="none"
              placeholder="password"
              icon="lock"
              onChangeText = {handleChange("password")}
              secureTextEntry={true}
              textContentType="password"
              
                      />
                <AppButton title="Login" elevation={10} color="black" textColor="primary" onPress={handleSubmit}/>
                  </>
          )}
          </Formik>
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