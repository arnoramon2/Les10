import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  pizzas=[];

  constructor(
    public navCtrl: NavController, 
    private events: Events
  ) {

  }

  ionViewDidLoad() {
    console.log('IonViewDidLoad aboutpage');


      this.events.subscribe("AddPizzaToCart", (pizza) => {
        this.pizzas.push(pizza);

        console.log("Currently in cart", this.pizzas);
      });
  }

}
