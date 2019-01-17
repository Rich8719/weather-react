import React, { Component } from "react"
import './weather.css'

const d = new Date()

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
            graphic: 'https://ssl.gstatic.com/onebox/weather/48/cloudy.png'
        }
    }

    temps = () => {
        //testing function. select random temperatures and graphics
        const randomTempLow = Math.floor(Math.random() * (47-32+1) +32)
        const randomTempHigh = randomTempLow + Math.floor(Math.random() * 10)
        const randomGraphic = Math.floor(Math.random() * 5)
        const graphics = [
            'https://ssl.gstatic.com/onebox/weather/48/cloudy.png',
            'https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png',
            'https://ssl.gstatic.com/onebox/weather/48/rain.png',
            'https://ssl.gstatic.com/onebox/weather/48/sunny.png',
            'https://ssl.gstatic.com/onebox/weather/48/snow.png'
        ]

        this.setState({
            tempHigh: randomTempHigh,
            tempLow: randomTempLow,
            graphic: graphics[randomGraphic]
        })
    }
    
    date = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const today = (d.getDay() + this.props.value)
        
        this.setState({
            day: days[(today <= 6) ? today : today - 7]
            
        })
    }
    
    componentDidMount(){
        this.date()
        this.temps()
    }

    render() {
        const { tempHigh, tempLow, day, weather, graphic } = this.state
        return (
            <div className="weather">
                <Day 
                    day={day}
                />
                <Graphic 
                    graphic={graphic} 
                    weather={weather} 
                />
                <Temperature 
                    tempHigh={tempHigh} 
                    tempLow={tempLow} 
                />
            </div>
        )
    }
} 

class Weather extends Component {
    render() {
        return (
            <div>
                <WeatherComponent value={0}/>
                <WeatherComponent value={1}/>
                <WeatherComponent value={2}/>
                <WeatherComponent value={3}/>
                <WeatherComponent value={4}/>
                <WeatherComponent value={5} />
                <WeatherComponent value={6} />
            </div>
        )
    }
}

export default Weather