import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneScreenComponent } from './phone-screen/phone-screen.component';
import { PlayerIconsComponent } from './player-icons/player-icons.component';
import { SwitchCardComponent } from './switch-card/switch-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneScreenComponent,
    PlayerIconsComponent,
    SwitchCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
