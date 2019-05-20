import React from 'react';
import Pressure from '../styles/images/icons/pressure.svg';
import Humidity from '../styles/images/icons/humidity.svg';
import Wind from '../styles/images/icons/wind-speed.svg';

class Weather extends React.Component {


    render() {
        return (
            <>
            <div>{this.props.description && <div className={"weather"}>
                {this.props.icon &&
                <img className={"conditions"} src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="Conditions"/>}
                <div className={"weatherInfo"}>
                    {this.props.city && this.props.country &&
                    <span className={"city"}>{this.props.city}, {this.props.country}</span>}
                    {this.props.temperature && <span className={"temperature"}>{this.props.temperature}°C</span>}
                </div>
                <ul>
                    {this.props.pressure && <li><img src={Pressure} alt="Pressure"/>{this.props.pressure}hPa</li>}
                    {this.props.humidity && <li><img src={Humidity} alt="Humidity"/>{this.props.humidity}%</li>}
                    {this.props.wind && <li><img src={Wind} alt="Wind Speed"/>{this.props.wind}m/s</li>}
                </ul>

            </div>}</div>
                {this.props.error && <a href={"https://pl.wikipedia.org/wiki/ISO_3166-1_alfa-2"} className={"WrongVal"} target={"blank"}>Please Enter The Correct Value</a>}
             </>
        )
    }
}

export default Weather;

