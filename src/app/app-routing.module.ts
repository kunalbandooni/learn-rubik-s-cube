import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FirstLayerComponent } from './first-layer/first-layer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SecondLayerComponent } from './second-layer/second-layer.component';
import { ThirdLayerComponent } from './third-layer/third-layer.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"Login", component: LoginComponent},
  {path:"Home", component: HomeComponent},
  {path: "Timer", component: TimerComponent},
  {path:"First-Layer", component: FirstLayerComponent},
  {path:"Second-Layer", component: SecondLayerComponent},
  {path:"Third-Layer", component: ThirdLayerComponent},
  {path:"Contact-Us", component: ContactUsComponent},
  {path:"**", component: NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
