import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';

/**
 * Generated class for the RestaurentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurent',
  templateUrl: 'restaurent.html',
})
export class RestaurentPage {

  stores:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db: FireDataServiceProvider
) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurentPage');
    this.stores=this.db.getAll();

    this.stores.subscribe((result) => {
      console.log("got thos data from provider", result);
    },(error)=> {
      console.log("Didn't get any data", error);
    });

    let store={
      name: "New pizza store 2.1"
    }
    this.db.update("0", store);
  }


}
