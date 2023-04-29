import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './front-office/header/header.component';
import { NavbarComponent } from './front-office/navbar/navbar.component';
import { FooterComponent } from './front-office/footer/footer.component';
import { HomeComponent } from './front-office/home/home.component';
import { PropertySearchingComponent } from './front-office/property-searching/property-searching.component';
import { TopAnnouncementComponent } from './front-office/top-announcement/top-announcement.component';
import { FeedbackComponent } from './front-office/feedback/feedback.component';
import { StatistiqueComponent } from './front-office/statistique/statistique.component';
import { BuyComponent } from './front-office/buy/buy.component';
import { RentComponent } from './front-office/rent/rent.component';
import { LoginComponent } from './front-office/login/login.component';
import { SubmitComponent } from './front-office/submit/submit.component';
import { ContactComponent } from './front-office/contact/contact.component';
import { SideBarComponent } from './back-office/side-bar/side-bar.component';
import { HomeBackComponent } from './back-office/home-back/home-back.component';
import { NavBarComponent } from './back-office/nav-bar/nav-bar.component';
import { FrontOfficeComponent } from './front-office/front-office/front-office.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PropertySearchingComponent,
    TopAnnouncementComponent,
    FeedbackComponent,
    StatistiqueComponent,
    BuyComponent,
    RentComponent,
    LoginComponent,
    SubmitComponent,
    ContactComponent,
    SideBarComponent,
    HomeBackComponent,
    NavBarComponent,
    FrontOfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
