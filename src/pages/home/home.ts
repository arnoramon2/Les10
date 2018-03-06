import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pizza = {
    title:"My Awesome Pizza",
    toppings: [
      {
        id: 1,
        naam: "pineapple"
      },
      {
        id: 4,
        name: "mushrooms"
      }
    ]
  }
  constructor(
    public navCtrl: NavController,
    private events: Events
  ) {

  }

  about() {
    this.events.publish("tabsNavigatieToAbout", this.pizza)


    //Navigeren naar een tab
    //this.navCtrl.parent.select(1);
  }



}
