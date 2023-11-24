

const buttonSubmit = document.getElementById('button-submit');

// const imageTemperature = document.getElementsByClassName("image-temperature");



buttonSubmit.addEventListener('click', () => {
    console.log("clickou");

    const cityInput = document.getElementById('city').value;
    console.log(cityInput);



    getCityInfo(cityInput);

});



function getCityInfo(cityInput) {
    apiUrl = `https://projeto-tempo.onrender.com/cidade/${cityInput}/json`;

    fetch(apiUrl)

        .then(res => res.json())
        .then((data) => {

            printInScreen(data)


        })

}

function printInScreen(data) {

    const temperature = data.temperatura;
    const city = data.cidade;
    const localTime = data.data_local;
    const weather = data.estado;
    const windSpeed = data.velocidade_do_vento;


    document.getElementById("temperature").textContent = `${temperature}°C`;
    document.getElementById("city-location").textContent = city;
    document.getElementById("localtime").textContent = localTime;
    document.getElementById("weather").textContent = `Clima: ${weather}`;
    document.getElementById("wind-speed").textContent = `Velocidade do vento: ${windSpeed}`;

    changeImageAndBackground(weather);


}


function changeImageAndBackground(weather) {
    let image = document.getElementById("image-temperature");
    let containerPage = document.getElementById("container-page");

    if (weather == "chuvoso" || weather == "chuva fraca" || weather == "chuva forte" || weather == "chuva leve" || weather == "chuva moderada") {
        image.setAttribute("src", "./assets/images/rainy.png");

        // containerPage.style.background = 'linear-gradient(180deg, #020C14 0%, rgba(59, 142, 213, 0.89) 99.99%, rgba(70, 170, 255, 0.00) 100%);'

        containerPage.style.background = 'linear-gradient(180deg, #020C14 0%, rgba(59, 142, 213, 0.89) 99.99%, rgba(70, 170, 255, 0.00) 100%)';



    } else if (weather == "ensolarado" || weather == "céu limpo") {
        image.setAttribute("src", "./assets/images/sunny.png");
        let containerPage = document.getElementById("container-page");

        // document.getElementById("container-page").style.background = 'linear-gradient(180deg, #020C14 0%, rgba(59, 142, 213, 0.89) 99.99%, rgba(70, 170, 255, 0.00) 100%)';

        containerPage.style.background = 'linear-gradient(180deg, #46AAFF 0%, rgba(59, 142, 213, 0.89) 99.99%, rgba(70, 170, 255, 0.00) 100%);'


    } else if (weather == "parcialmente nublado" || weather == "nebuloso" || weather == "nuvens esparsas") {
        image.setAttribute("src", "./assets/images/cloudy.png");

        containerPage.style.background = 'linear-gradient(180deg, #4778A1 0%, rgba(59, 142, 213, 0.89) 99.99%, rgba(70, 170, 255, 0.00) 100%)';


    } else {
        image.setAttribute("src", "./assets/images/stormy.png");

        containerPage.style.background = 'linear-gradient(180deg, #175081 0%, rgba(0, 96, 177, 0.89) 99.99%, rgba(70, 170, 255, 0.00) 100%)'


    }



}