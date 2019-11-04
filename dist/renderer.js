// Fill in the functions for your Renderer Class

class Renderer {
    _renderPlayers(players) {
        let source = $('#wheather-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({ players })
        $('.wheather-container').empty().append(newHTML)
    }
    renderData(allCityData) {
       this._renderPlayers(players)
    }
}

