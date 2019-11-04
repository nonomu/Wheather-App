const render = new Renderer()


const newCity = {
    name: "Israel",
    temperature: "23",
    condition: "Sunny",
    conditionPic: "lovely"
}

const fetchWheatherData = function () {
    let input = $("#WheatherCityName").val()
    $.get(`/city/${input}`, function (CityWeather) {
        console.log(CityWeather)
        // render.render(TeamData)
    })
}
$.get(`/cities/`, function (cities) {
    console.log(cities)
})

$.post(`/city`, newCity, function (cities) {
    console.log(cities)
})    
cityName="Israel"

const deleteWheatherData= function()
    {
$.ajax({
    url: `/city/${cityName}`,
    type: 'DELETE',
    success: function(result) {
        console.log(result)
    }
})
    }