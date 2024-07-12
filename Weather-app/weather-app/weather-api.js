//one example of url-
//https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=469decb4fc8554e73130df6e73c64010
const WEATHER_API_BASE_URL="https://api.openweathermap.org/data/2.5/weather";
const API_KEY="469decb4fc8554e73130df6e73c64010";
class WeatherAPI{
    buildURL(locationName){
this.WeatherAPIURL=new URL(WEATHER_API_BASE_URL);
this.WeatherAPIURL.searchParams.append("q",locationName);
this.WeatherAPIURL.searchParams.append("units","metric");
this.WeatherAPIURL.searchParams.append("appid",API_KEY);
console.log(this.WeatherAPIURL.toString());
    }
  async  invokeURL(){
const responseObj=await fetch(this.WeatherAPIURL.toString());
const responseJSON=await responseObj.json();
return responseJSON;
    }
}
export{WeatherAPI}