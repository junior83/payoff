import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import {FormsModule} from "@angular/forms";
import { PlayerDetailComponent } from './player-detail/player-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
