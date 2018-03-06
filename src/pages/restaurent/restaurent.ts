import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';
import { CameraPage } from '../camera/camera';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  avatarData="";

  readonly options: CameraOptions = {
    quality: 75,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.PNG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit:true,
    targetHeight: 250,
    targetWidth: 250
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db: FireDataServiceProvider,
    private camera: Camera
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



    // ****  UPDATE DATABASE ****
    //let store={
    //  name: "New pizza store 2.1"
    // }
    //this.db.update("0", store);
  }


  image(){
    this.navCtrl.setRoot(CameraPage);
    console.log("homo");
  }

  takePicture(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.avatarData = base64Image;
      
      let store = {
        imageData: base64Image
      }

      this.db.update("0", store)
      
     }, (err) => {
      // Handle error
     });
  }

}
