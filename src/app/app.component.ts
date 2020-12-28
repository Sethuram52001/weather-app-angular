import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  api_key: string = `b26a0c9823949ba15b3c90fffe868c93`;
  title = 'weather-app';
  constructor() {
    this.getWeather();
  }

  getWeather = async () => {
    //e.preventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Madurai,India&appid=${this.api_key}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);
    console.log(data.main.temp)
  }
}