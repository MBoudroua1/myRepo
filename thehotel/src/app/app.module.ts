import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HebergementComponent } from './hebergement/hebergement.component';
import { RoomsComponent } from './hebergement/rooms/rooms.component';
import {RestaurationComponent} from './restauration/restauration.component';


@NgModule({
  declarations: [
    AppComponent,
    HebergementComponent,
    RoomsComponent,
    RestaurationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
