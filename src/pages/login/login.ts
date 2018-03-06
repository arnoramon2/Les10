import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {
    email:"arno@ramon.com",
    password: "123456"
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public menuCtrl: MenuController
  ) {
    menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  login() {
    console.log('Tried to login');
    this.authService.login(this.user.email, this.user.password).then(() => {
      console.log("authService replied with")
      if (this.authService.isLoggedIn) {
        // naar home gaan, if auth succes
        this.navCtrl.setRoot(TabsPage)
        //this.menuCtrl.enable(true);
      }
    })
  }
}
