import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneScreenComponent } from './phone-screen/phone-screen.component';
import { PlayerIconsComponent } from './player-icons/player-icons.component';
import { SwitchCardComponent } from './switch-card/switch-card.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { PlusCardComponent } from './plus-card/plus-card.component';
import { VetoCardComponent } from './veto-card/veto-card.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneScreenComponent,
    PlayerIconsComponent,
    SwitchCardComponent,
    PlusCardComponent,
    VetoCardComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule // Include BrowserAnimationsModule here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
