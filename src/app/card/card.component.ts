import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  city: string = 'Zurich';
  weatherData: any;

  
  constructor(private weatherService: WeatherService, private router: Router) {}

  private convertTemperaturesToCelsius(){
    if (this.weatherData.main && this.weatherData.main.temp) {
      this.weatherData.main.temp = this.convertKelvinToCelsius(this.weatherData.main.temp);
    }
    if (this.weatherData.main && this.weatherData.main.temp_min) {
      this.weatherData.main.temp_min = this.convertKelvinToCelsius(this.weatherData.main.temp_min);
    }
    if (this.weatherData.main && this.weatherData.main.temp_max) {
      this.weatherData.main.temp_max = this.convertKelvinToCelsius(this.weatherData.main.temp_max);
    }
  }
  
  private convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
 
  ngOnInit(): void {
    
    this.getWeather(this.city);
    this.city = '';
  }
  onSubmit() {
    this.getWeather(this.city);
    this.city = '';
  }

  private getWeather(city: string) {
    this.weatherService.getWeather(city).subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.weatherData = response;
        this.convertTemperaturesToCelsius();
        
      },
      error: (error) => {
        console.error('API Error:', error);
        if (error.status === 404) {
          this.router.navigateByUrl('/404');
      }
    }
      
    });
  }
  
  }
 

