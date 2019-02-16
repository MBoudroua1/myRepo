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
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { ThaiWeddingComponent } from './weddings/thai-wedding/thai-wedding.component';
import { MorrocanWeddingComponent } from './weddings/morrocan-wedding/morrocan-wedding.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';



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
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    ThaiWeddingComponent,
    MorrocanWeddingComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
