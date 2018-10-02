import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBYcoPMYAz6X-6blp7i_u_To7SnW6QjdI0',
  authDomain: 'expensify-7db36.firebaseapp.com',
  databaseURL: 'https://expensify-7db36.firebaseio.com',
  projectId: 'expensify-7db36',
  storageBucket: 'expensify-7db36.appspot.com',
  messagingSenderId: '73026896226'
};

firebase.initializeApp(config);

firebase.ref().set({
  name: 'Toni',
  age: 32,
  likes: {}
});

firebase
  .database()
  .ref('age')
  .set(33);
