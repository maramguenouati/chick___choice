import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  private apiKey = '4f221624feeb1e26353ebb020cdd0bf1';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  
  constructor(private http: HttpClient) { }
  
  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
