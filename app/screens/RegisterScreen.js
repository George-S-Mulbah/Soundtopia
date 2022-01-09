import React from 'react';
import { View, StyleSheet ,Text , Image,KeyboardAvoidingView } from 'react-native';

import Screen from '../components/Screen';
import * as Yup from 'yup'
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';
import { ScrollView } from 'react-native';
import { auth } from '../api/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
function RegisterScreen(props) {


  const handleSubmit = async values => {
    // This function received the values from the form
    // The line below extract the two fields from the values object.
    const { email, password } = values;
    var body = {
      password: password,
      email: email
    };


    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorMessage);
    // ..
  });
    
    // auth.createUserWithEmailAndPassword(email, password)
    //   .then(userDetails => {
    //     // const user = userDetails;
    //     // console.log(user.email);
    //   }).catch(e => console.log(e));

  }
  return (
    <Screen style={styles.container}>
      
    <Image
        style={styles.logo}
        source={require('../assets/background.png')}
    />

      <ScrollView>
        
      
<AppForm
        initialValues={{ name:'' ,email : '' , password :'' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
    >
          
  
         <AppFormField
          autoCorrect={false}
        icon="account"
        name="name"
        placeholder="Name"
                />
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
          name="password"
          autoCapitalize="none"
          icon="lock"
          KeyboardType="email-address"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
                 />
                
              
   <SubmitButton title="Register" />
    </AppForm>
      </ScrollView>
         
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

export default RegisterScreen;