import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FirstLayerComponent } from './first-layer/first-layer.component';
import { SecondLayerComponent } from './second-layer/second-layer.component';
import { ThirdLayerComponent } from './third-layer/third-layer.component';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NoPageFoundComponent,
    ContactUsComponent,
    FirstLayerComponent,
    SecondLayerComponent,
    ThirdLayerComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
