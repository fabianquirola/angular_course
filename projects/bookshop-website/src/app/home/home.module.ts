import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { ShopFeaturesComponent } from './shop-features/shop-features.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ShopFeaturesComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
