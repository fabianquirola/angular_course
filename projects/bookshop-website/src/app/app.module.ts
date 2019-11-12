import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './global/header/header.component';
import { LogoComponent } from './global/logo/logo.component';
import { SearchComponent } from './global/search/search.component';
import { UtilNavComponent } from './global/util-nav/util-nav.component';
import { MenuComponent } from './global/menu/menu.component';
import { FooterComponent } from './global/footer/footer.component';
import { HomeModule } from './home/home.module'
import { NewsModule } from './news/news.module'
import { SecurityModule } from './security/security.module'
import  {HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    UtilNavComponent,
    MenuComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    HomeModule,
    NewsModule,
    SecurityModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
