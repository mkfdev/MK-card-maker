import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
//Firebase모듈, 메서드 임포트

//구성 객체 가져오기
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_API_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID
}

//firebase 초기화
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
export const googleProvider = firebaseApp.auth.GoogleProvider();
export const githubProvider = firebaseApp.auth.GithubProvider();