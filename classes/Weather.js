class Weather{
    constructor( city ) {
        this.city = city
        this.key = 'a23e25bc421ba3eb2540db15a33dd6a7'
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responseData = await response.json()
        return responseData
    }
}