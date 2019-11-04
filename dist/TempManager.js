
class TempManager {
    constructor() {
        this.cityData = []
    }
    async getDataFromDB() {
        const cities = await $.get(`/cities/`)
        console.log(this.cityData = cities)
    }
    async getCityData(cityName) {
        const cityData=await $.get(`/city/${cityName}`)
        //Finish the filter from the data that the api return
        cityData.push(cityData)
            
    }
    async saveCity(cityName) {
        saveCity = this.cityData.find(c => c.name= cityName)
       await $.post(`/city`, saveCity)
            console.log("Saved (Maybe :)")
           
    }
    async removeCity(cityName) {
        $.ajax({
            url: `/city/${cityName}`,
            type: 'DELETE',
            success: function(result) {
                console.log(result)
            }
        })
            
    }

}

