const render = new Renderer()
const temp = new TempManager()




const loadPage  = async function () {
    const allCityData = temp.getDataFromDB()
    render.renderData(allCityData)
}
// loadPage()
 
const handleSearch = async function () {
    const CityName = $("#WheatherCityName").val()
    const cityData =  temp.getCityData(CityName)
    //Why needed to be async?
}

