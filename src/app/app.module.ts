import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationService } from './navigation.service';
import { PlayerService } from './player.service';
import { PrismicService } from './prismic.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NavigationService, PlayerService, PrismicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
