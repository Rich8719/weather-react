import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

function getWeather() {
    return api.get(`/${zip}`).then(result => {
        return result.data
    })
}