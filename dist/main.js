const render = new Renderer()




const fetchWheatherData = function () {
    let input = $("#WheatherCityName").val()
    $.get(`/city/${input}`, function (CityWeather) {
        console.log(CityWeather)
        
        // render.render(TeamData)
    })
}
    // $.post(`team/` , newteams , function (response) {
    //     //console.log(response)
    // })
