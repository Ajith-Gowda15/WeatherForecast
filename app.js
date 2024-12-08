document.getElementById('getWeather').addEventListener('click', async(e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    try{
    if (city) {
      document.getElementById('weatherResult').innerText = `Fetching weather for ${city}...`;
         let result=document.getElementById('weatherResult')
         let apiKey = "0135c0a7a5199009d87f7fcf4cd208b9";
         let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
         let data= await fetch(apiUrl)
         let finalData=await data.json()
                              if(finalData.cod===200){
                                  console.log(finalData);
                                  result.innerHTML=
                                  `<h1>City name:${finalData.name}</h1>
                                  <h1>Temp:${finalData.main.temp}</h1>
                                  <h1>Country:${finalData.sys.country}</h1>
                                  <h1>Description:${finalData.weather[0].description}</h1>`
                              }else{
                              alert("Country not available")
                              }
    } 
    else {
      document.getElementById('weatherResult').innerText = 'Please enter a city name.';
    }
    }
    catch(error){
    console.log(error.message);
    }
});
  