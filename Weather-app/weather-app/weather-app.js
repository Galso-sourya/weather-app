import { WeatherAPI } from "./weather-api";
class WeatherApp{

    addListeners(){
        const searchBoxElement=document.querySelector(".search-box");
        searchBoxElement.weatherAppObj=this;
        searchBoxElement.addEventListener("keypress",this.handleWeatherAPIInvocation);
    }
    async handleWeatherAPIInvocation(event){
        if(event.key=="Enter"){
const eventTarget=event.target;
const userSuppliedLocation=eventTarget.value;
const weatherAPIObj=new WeatherAPI();
weatherAPIObj.buildURL(userSuppliedLocation);
const responseJSON=await weatherAPIObj.invokeURL();
const weatherAppObj=eventTarget.weatherAppObj;
weatherAppObj.updateUI(responseJSON);
        }
    }
    updateUI(responseJSON){
        const locationValue=`${responseJSON.name},${responseJSON.sys.country}`;
        const locationElement=document.querySelector(".location .city");
        locationElement.innerText=locationValue;
        const dateElement=document.querySelector(".location .date");
        dateElement.innerText=this.getCurrentDate();
        const temperatureElement=document.querySelector(".current .temp");
        temperatureElement.innerText=`${responseJSON.main.temp} degree`;
        const temperatureTypeElement=document.querySelector(".current .weather");
        temperatureElement.innerText=`${responseJSON.weather[0].main}`;
    }
    getCurrentDate(){
        const today=new Date();
        const dateAsString=today.toLocaleDateString("en-US",{
year:'numeric',
month:'long',
weekday:'long',
day:'numeric'
        })
        return dateAsString;
    }
}
export {WeatherApp}