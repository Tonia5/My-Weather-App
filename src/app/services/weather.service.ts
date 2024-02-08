import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0a5ada4e43625da7fcc5ec74330181bc`
    );
  }
}
