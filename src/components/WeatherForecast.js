import React, { Component } from 'react';
import axios from "axios";
// Fake Data
// import { dataObject } from '../data';

// Location, Temperature, Icon
class WeatherForecast extends Component {

    // Live Functions
    getForecast = () => {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=556087c38f053be09d8bd5d824fea113')
            .then(res => {
                this.setState({
                    weatherData: res.data,
                    curTime: new Date().toLocaleString()
                })
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    // Fake Data
    // getForecast = () => {
    //     this.setState({
    //         weatherData: dataObject.data,
    //         curTime: new Date().toLocaleString()
    //     })
    // }

    constructor(props) {
        super(props);

        this.state = {
            weatherData: null,
            curTime: new Date().toLocaleString()
        }

        this.getForecast();
    }

    // Fake Data
    // componentDidMount() {
    //     setInterval(() => {
    //       this.setState({
    //         weatherData: dataObject.data,
    //         curTime : new Date().toLocaleString()
    //       })
    //     }, 1000)
    // }

    render() {
        return (
            <div className="Weather-Parent">
                {this.state.weatherData && this.state.weatherData.cod === 200 ?

                    <div className="Second-Background">
                        <div className='Weather-Container'>
                            <div className="Top-Bar">
                                <span className="City">Toronto, ON</span>

                                <span className="Province">                         {this.state.curTime}
                                </span>
                            </div>

                            <div className="Weather-Row Push-Up">
                                <img className="Weather-Icon" src={`http://openweathermap.org/img/wn/${this.state.weatherData.weather[0].icon}@4x.png`} />
                                <p className="Temperature">{this.state.weatherData.main.temp}&deg;C</p>
                                <p className="Description">{this.state.weatherData.weather[0].description}</p>
                            </div>

                            <div className="Weather-Row Display-Box Push-Down">
                                <div className="Weather-Column-Left">
                                    <p className="Weather-Title">Feels Like</p>
                                    <p className="Weather-Title">High</p>
                                    <p className="Weather-Title">Low</p>
                                    <p className="Weather-Title">Wind Speed</p>
                                    <p className="Weather-Title">Pressure</p>
                                    <p className="Weather-Title">Humidity</p>
                                </div>

                                <div className="Weather-Column-Right">
                                    <p className="Weather-Title">
                                        {this.state.weatherData.main.feels_like}&deg;C
                                </p>
                                    <p className="Weather-Title">
                                        {this.state.weatherData.main.temp_max}&deg;C
                                </p>
                                    <p className="Weather-Title">
                                        {this.state.weatherData.main.temp_min}&deg;C
                                </p>
                                    <p className="Weather-Title">
                                        {this.state.weatherData.wind.speed} m/s
                                </p>
                                    <p className="Weather-Title">
                                        {this.state.weatherData.main.pressure} hPa
                                </p>
                                    <p className="Weather-Title">
                                        {this.state.weatherData.main.humidity}%
                                </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    : null
                }
            </div>
        )
    }
}
export default WeatherForecast;