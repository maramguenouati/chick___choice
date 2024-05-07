import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocationDetails } from '../Models/LocationDetails';
import { meteoDetails } from '../Models/meteoDetails';
import { TemuperatureData } from '../Models/TemperatureData';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  cityName:string='tunis';
//variables remplies pas pts de terminaison api 
  locationDetails?:LocationDetails;
  meteoDetails?:meteoDetails;
//variables cotenant les donnees extraites des pts api
temperatureData?:TemuperatureData;//left meteo


  constructor(private httpClient: HttpClient) { }

getData(){

}

}
