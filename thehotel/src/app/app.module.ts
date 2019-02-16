import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HebergementComponent } from './hebergement/hebergement.component';
import { RoomsComponent } from './hebergement/rooms/rooms.component';
import {RestaurationComponent} from './restauration/restauration.component';
import { BarsComponent } from './restauration/bars/bars.component';
import { RestaurantComponent } from './restauration/restaurant/restaurant.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { BienEtreSpaComponent } from './lifestyle/bien-etre-spa/bien-etre-spa.component';
import { ActivityComponent } from './lifestyle/activity/activity.component';



@NgModule({
  declarations: [
    AppComponent,
    HebergementComponent,
    RoomsComponent,
    RestaurationComponent,
    BarsComponent,
    RestaurantComponent,
    LifestyleComponent,
    BienEtreSpaComponent,
    ActivityComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
