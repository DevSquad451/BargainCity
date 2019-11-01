import { Routes } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { DiscountedComponent } from './../discounted/discounted.component';
import { ContactusComponent } from './../contactus/contactus.component';
import { HelpComponent } from './../help/help.component';
import { MyaccountComponent } from './../myaccount/myaccount.component';
import { SearchComponent } from './../search/search.component';
import { CartComponent } from './../cart/cart.component';

export const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'discounted',  component: DiscountedComponent },
  { path: 'contactus',  component: ContactusComponent },
  { path: 'help',  component: HelpComponent},
  { path: 'myaccount',  component: MyaccountComponent},
  { path: 'search',  component: SearchComponent},
  { path: 'cart',  component: CartComponent},
  { path: '', redirectTo: '/help', pathMatch: 'full' }
];