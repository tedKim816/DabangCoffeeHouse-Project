import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LocationComponent } from './location/location.component';
import { ConfigService } from './config.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    CarouselComponent,
    RestaurantComponent,
    MenuComponent,
    ReservationComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
