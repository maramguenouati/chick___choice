import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{HttpClientModule}from '@angular/common/http';
import { MeteoComponent } from './meteo/meteo.component';
import { MeteoService } from './meteo.service';
import { LeftMeteoComponent } from './left-meteo/left-meteo.component';
import { RightMeteoComponent } from './right-meteo/right-meteo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DressingComponent } from './dressing/dressing.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeteoComponent,
    LeftMeteoComponent,
    RightMeteoComponent,
    SignUpComponent,
    SignInComponent,
    ChatbotComponent,
    CalendarComponent,
    DressingComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [MeteoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
