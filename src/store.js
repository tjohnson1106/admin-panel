import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firebase";

// TODO custom reducers

const firebaseConfig = {
  apiKey: "AIzaSyDZHCs918Eq7yBrTzADE9HlOtcQ-vHsS68",
  authDomain: "client-panel-772db.firebaseapp.com",
  databaseURL: "https://client-panel-772db.firebaseio.com",
  projectId: "client-panel-772db",
  storageBucket: "client-panel-772db.appspot.com",
  messagingSenderId: "449390628024"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

// init firebase instance
firebase.initializeApp(firebaseConfig);

// init firestore
// const firestore = firebase.firestore();

// reactReduxFirebase enhancer
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// add firebase to reducers -> TODO include custom reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const initialState = {};

// create store

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
