import { Routes } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { DiscountedComponent } from './../discounted/discounted.component';
import { ContactusComponent } from './../contactus/contactus.component';
import { HelpComponent } from './../help/help.component';
import { MyaccountComponent } from './../myaccount/myaccount.component';
import { SearchComponent } from './../search/search.component';
import { CartComponent } from './../cart/cart.component';
import { TermsComponent } from './../terms/terms.component';
import { LoginComponent } from './../login/login.component';
import { RegisterComponent } from './../register/register.component';

export const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'discounted',  component: DiscountedComponent },
  { path: 'contactus',  component: ContactusComponent },
  { path: 'help',  component: HelpComponent},
  { path: 'myaccount',  component: MyaccountComponent},
  { path: 'search',  component: SearchComponent},
  { path: 'cart',  component: CartComponent},
  { path: 'terms',  component: TermsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];