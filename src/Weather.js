import React, { Component } from "react"
import './weather.css'

const Day = (props) => {
    return (
        <div className="day">{props.day}</div>
    )
}

const Graphic = (props) => {
    return (
        <img src={props.graphic} alt={props.weather} />
    )
}

const Temperature = (props) => {
    return (
        <div className="current-temp">
            <div className="temp-high">{props.tempHigh}</div>
            <div className="temp-low">{props.tempLow}</div>
        </div>
    )
}

class WeatherComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day: 'Mon',
            tempHigh: '37',
            tempLow: '32',
            weather: 'cloudy',
            graphic: `https://ssl.gstatic.com/onebox/weather/48/cloudy.png`
        }
    }

    render() {
        const { tempHigh, tempLow, day, weather, graphic } = this.state
        return (
            <div className="weather">
                <Day day={day} />
                <Graphic graphic={graphic} weather={weather} />
                <Temperature tempHigh={tempHigh} tempLow={tempLow} />
            </div>
        )
    }
} 

class Weather extends Component {
    render() {
        return (
            <div>
                <WeatherComponent/>
                <WeatherComponent />
                <WeatherComponent />
                <WeatherComponent />
                <WeatherComponent />
            </div>
        )
    }
}

export default Weather