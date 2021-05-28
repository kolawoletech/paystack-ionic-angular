import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { Angular4PaystackModule } from 'angular4-paystack';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    Angular4PaystackModule.forRoot('k_test_beaf8a50a1e76261f013e0201f1fa63e8b67d353'),

    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
