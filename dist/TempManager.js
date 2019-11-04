
class TempManager {
    constructor() {
        this.cityData = []
    }
    async getDataFromDB() {
        const cities = await $.get(`/cities/`)
        this.cityData = cities
        console.log(cities);
        
    }
    async getCityData(cityName) {

        const cityD = await $.get(`/city/${cityName}`)
        const newCity= {name:cityD.name , temperature:cityD.main.temp, condition: cityD.weather[0].description, conditionPic: cityD.weather[0].icon}
        this.cityData.push(newCity)
        console.log(this.cityData)
        
    }
    async saveCity(cityName) {
        const saveCity = this.cityData.find(c => c.name = cityName) 
        if(saveCity)
        {
        await $.post(`/city`, saveCity)
        console.log("Saved (Maybe :)")
        }
        else{
            console.log("Not exist");
        }
    }
    async removeCity(cityName) {
        $.ajax({
            url: `/city/${cityName}`,
            type: 'DELETE',
            success: function (result) {
                console.log(result)
            }
        })
        let index = this.cityData.indexOf(cityName);
        this.cityData.splice(index,1)
    }

}

