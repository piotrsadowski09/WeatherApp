import React from 'react';


import "./styles/main.scss";
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "355085cde5571a7a583e29effcca38c0";

class App extends React.Component {

    state = {
        temperature : undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: undefined,
        pressure: undefined,
        humidity:undefined,
        wind: undefined


    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
            .then(response => response.json());



        const data = await api_call;
        let message = data.message;
        console.log(data);
        if(city && country && !message){
            this.setState({
                temperature: Math.round(data.main.temp),
                city: data.name,
                country: data.sys.country,
                description: data.weather[0].main,
                icon: data.weather[0].icon,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                error:""
            })
        } else {
            this.setState({
                temperature: "",
                city: "",
                country: "",
                pressure:"",
                wind: "",
                humidity:"",
                description: "",
                icon:"",
                error:"Please enter the correct value"
            })
        }

    };
    render() {

        return (
            <div className={"containerA"}>
              <Header />
              <Form getWeather={this.getWeather} />
              <Weather temperature={this.state.temperature} city={this.state.city} country={this.state.country} description={this.state.description} icon={this.state.icon} pressure={this.state.pressure} humidity={this.state.humidity} wind={this.state.wind} error={this.state.error}
              />
            </div>
        )
    }
}

export default App;
