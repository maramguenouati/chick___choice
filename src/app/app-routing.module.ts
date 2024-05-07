import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeteoComponent } from './meteo/meteo.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { CalendarComponent } from './calendar/calendar.component';



const routes: Routes = [
  {path :'home',component:HomeComponent},
  { path: 'meteo', component: MeteoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  {path:'sign-in',component:SignInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'chatbot',component:ChatbotComponent},
  {path:'calendar',component:CalendarComponent},


  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
