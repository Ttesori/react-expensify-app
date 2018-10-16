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

const database = firebase.database();

database
  .ref()
  .set({
    name: 'Toni2',
    age: 32,
    location: {
      city: 'St Augustine',
      state: 'FL'
    }
  })
  .then(() => {
    console.log('Created DB object');
  })
  .catch((e) => {
    console.log('Something went wrong', e);
  });
