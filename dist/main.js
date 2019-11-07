const render = new Renderer()
const temp = new TempManager()




const loadPage = async function () {
    await temp.getDataFromDB()
    render.renderData(temp.cityData)
}
loadPage()
const vlidateInput = function(CityName) {
    let CheckNotExist = temp.cityData.map(a => a.name.toLowerCase()).indexOf(CityName.toLowerCase())
    let Checknumbers =  CityName.match(/\d+/g);
    CheckNotExist=CheckNotExist==(-1)? true:false 
    Checknumbers=Checknumbers==null? true:false
    return {CheckNotExist,Checknumbers}
}

const handleSearch = async function () {
    const CityName = $("#CityInput").val()
    const checkInput =vlidateInput(CityName)
    if(checkInput.CheckNotExist && checkInput.Checknumbers)
    { 
    const cityData = await temp.getCityData(CityName)
    render.renderData(temp.cityData)
    $("#CityInput").val("")
    }
    else if(checkInput.CheckNotExist){
        $("#CityInput").attr('placeholder', "Error input")
        $("#CityInput").val("")
      //  $("#CityInput").val("already saved")
    }
    else{
        $("#CityInput").attr('placeholder', "allready exist")
        $("#CityInput").val("")
    }
}

$("#CityInput").on("click",function () {
    $("#CityInput").attr('placeholder', "Enter City Name")
})
$(".weather-container").on("click", ".fa-plus", function () {
    const CityName = $(this).closest(".City").find(".city-info").find(".city-name")[0].innerHTML
    temp.saveCity(CityName)
    $(this)[0].className ="far fa-check-circle"
    $(".fa-check-circle").animate({ opacity: '0' },1500)
})
$(".weather-container").on("click", ".fa-trash", function () {
    const CityName = $(this).closest(".City").find(".city-info").find(".city-name")[0].innerHTML
    temp.removeCity(CityName)
    $(this).animate({ opacity: '0' },500)
    render.renderData(temp.cityData)
})
$(".weather-container").on("click", ".fa-sync", function () {
    const CityName = $(this).closest(".City").find(".city-info").find(".city-name")[0].innerHTML
    //temp.removeCity(CityName)
    $(this).animate({ opacity: '0' },500)
    render.renderData(temp.cityData)
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#input-container').addClass('fixed');
    } else {
        $('#input-container').removeClass('fixed');
    }
});
