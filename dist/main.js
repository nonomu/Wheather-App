const render = new Renderer()
const temp = new TempManager()




const loadPage = async function () {
    await temp.getDataFromDB()
    render.renderData(temp.cityData)
}
loadPage()


const handleSearch = async function () {
    const CityName = $("#WheatherCityName").val()
    const cityData = await temp.getCityData(CityName)
    render.renderData(temp.cityData)
    $("#WheatherCityName").val("")
}

$(".weather-container").on("click", ".fa-plus", function () {
    const CityName = $(this).closest(".City").find(".city-info").find(".city-name")[0].innerHTML
    console.log($(this).closest(".City").find(".city-info").find(".city-name")[0].innerHTML);
    temp.saveCity(CityName)
    $(this)[0].className = "fas fa-trash"
})
$(".weather-container").on("click", ".fa-trash", function () {
    const CityName = $(this).closest(".City").find(".city-info").find(".city-name")[0].innerHTML
    console.log(CityName)
    temp.removeCity(CityName)
    $(this).animate({ opacity: '0' },500)
    render.renderData(temp.cityData)
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#input-container').addClass('fixed');
    } else {
        $('#input-container').removeClass('fixed');
    }
});
