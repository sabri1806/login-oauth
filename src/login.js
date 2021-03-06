import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';


const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
  render() {
    const { 
      user, 
      signOut, 
      signInWithGoogle,
     } = this.props;
    console.log(user)
    return (
     
      <div>
        
        {
          user ?
            <p>Hello,{user.displayName}</p>
            : <p>Please, Sign in</p>
        }
        {
          user ?
            <button onClick={signOut}>Sign Out</button>
            : <button onClick={signInWithGoogle}>Sign in with Google</button>
        }
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),

};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);