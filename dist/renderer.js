
class Renderer {
    _renderWheather(allCityData) {
        let source = $('#wheather-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({ allCityData })
        $('.weather-container').empty().append(newHTML)
        $('.City:last').toggle();
        $('.City:last').toggle("slide:right");
       
    }
    renderData(allCityData) {
        allCityData.forEach(c => {c.temperature = Math.round(c.temperature)});
       this._renderWheather(allCityData)
    }
}

