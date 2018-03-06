import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthServiceProvider {
  isLoggedIn: boolean = false;
  constructor(
    public afAuth: AngularFireAuth,
    public toastCtrl: ToastController
  ) {
    console.log('Hello AuthServiceProvider Provider');
  }

  loginWithGoogle() {
    return this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  login(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log("login result", result);
        this.isLoggedIn = true;
      })
      .catch((error) => {
       this.displayError(error, "error during login");
      })
  }

displayError(error:any, message: string){
  console.log(message, error);
  this.presentToast(error.message);
  this.isLoggedIn = false
}

  register(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((result) => {
        console.log("regsiter result", result);
      })
      .catch((error) => {
        this.displayError(error, "error during register");
       })
  }

  logout() {
    this.afAuth.auth.signOut();
    this.isLoggedIn = false;
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast', message);
    });

    toast.present();
  }
}