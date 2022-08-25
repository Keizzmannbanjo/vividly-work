import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDGBZAlhQSaKyeyIhoEWaCVp1oHBpT7Xw",
  authDomain: "todo-app-39f62.firebaseapp.com",
  projectId: "todo-app-39f62",
  storageBucket: "todo-app-39f62.appspot.com",
  messagingSenderId: "233403029062",
  appId: "1:233403029062:web:1ef833fec58c813bbfdc47",
  measurementId: "G-K23X93WNE2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
