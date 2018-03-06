import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Events, NavController, Tabs } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild(Tabs) tabs: Tabs;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(
    public navCtrl: NavController,
    private events: Events
  ) {

  }

  ionViewDidLoad() {
    console.log('IonViewDidLoad tabsPage');

    this.events.subscribe("tabsNavigatieToAbout", (pizza) => {
      //this.navCtrl.push(AboutPage));

      console.log("tabs navigatie event", pizza)
      this.tabs.select(1).then(() => {
        this.events.publish("AddPizzaToCart", pizza);
      })

      
    });
  }
}
