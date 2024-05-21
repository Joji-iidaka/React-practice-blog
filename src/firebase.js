// firebaseとReactを連携するための設定を記述
// 基本的にfirebaseのサイトからコードを取得
// 必要な機能のimport,exportを行う

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnO8Lee3vogaiTh65CrDTJdBO6U0HFNVE",
  authDomain: "blog-69c9b.firebaseapp.com",
  projectId: "blog-69c9b",
  storageBucket: "blog-69c9b.appspot.com",
  messagingSenderId: "235217797451",
  appId: "1:235217797451:web:9ed727faacc266e2a9a8ce",
  measurementId: "G-EEKBMCXL0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth,provider,db};