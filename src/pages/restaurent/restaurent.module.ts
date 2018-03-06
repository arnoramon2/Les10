import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurentPage } from './restaurent';

@NgModule({
  declarations: [
    RestaurentPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurentPage),
  ],
})
export class RestaurentPageModule {}
