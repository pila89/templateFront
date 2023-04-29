import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './front-office/home/home.component';
import { RentComponent } from './front-office/rent/rent.component';
import { BuyComponent } from './front-office/buy/buy.component';
import { LoginComponent } from './front-office/login/login.component';
import { SubmitComponent } from './front-office/submit/submit.component';
import { ContactComponent } from './front-office/contact/contact.component';

const routes: Routes = [
   {path: '',component:HomeComponent},
   {path: 'buy',component:BuyComponent},
   {path: 'rent',component:RentComponent},
   {path: 'login',component:LoginComponent},
   {path: 'submit',component:SubmitComponent},
   {path: 'contact',component:ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


