import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LocationComponent } from './location/location.component';


const routes: Routes = [
  { path: 'Welcome', component: CarouselComponent},
  { path: 'Restaurant', component: RestaurantComponent},
  { path: 'Menu', component: MenuComponent},
  { path: 'Reservation', component: ReservationComponent},
  { path: 'OurLocation', component: LocationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
