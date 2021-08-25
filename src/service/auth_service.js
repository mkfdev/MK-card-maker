import {firebaseAuth, googleProvider, githubProvider} from './firebase';

class AuthService{
  signUp(email, password) {
    return firebaseAuth
            .createUserWithEmailAndPassword(email, password);
  }

  //신규email로 login
  login(email, password) {
    return firebaseAuth
            .signInWithEmailAndPassword(email, password);
  }

  //google,github로 login
  loginProvider(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    })
  }

  logout() {
    firebaseAuth.signOut().then(console.log);
  }

  getProvider(providerName) {
    switch(providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;