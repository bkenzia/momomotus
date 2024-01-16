import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import {FormsModule} from "@angular/forms";
import { ClavierComponent } from './components/clavier/clavier.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ClavierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
