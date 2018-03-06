import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {
    email: "",
    password: "",
    password2: ""
  }

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  home() {
    this.navCtrl.setRoot(HomePage);
  }

  register(){
    if(this.user.password === this.user.password2) {
      this.authService.register(this.user.email, this.user.password).then(() => {
        console.log("Registratie resultaat:")
        if (this.authService.isRegistered) {
          this.authService.isRegistered = false;
          //.pop = terug naar pagina van waar je komt
          this.navCtrl.pop();
        }
      })
    } else {
      this.presentToast("Passwors need to be identival.");
    }

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
