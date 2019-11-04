// Fill in the functions for your Renderer Class

class Renderer {
    _renderPlayers(players) {
        let source = $('#wheather-template').html()
        let template = Handlebars.compile(source)
        let newHTML = template({ players })
        $('.wheather-container').empty().append(newHTML)
    }
    render(players) {
       this._renderPlayers(players)
    }
}

