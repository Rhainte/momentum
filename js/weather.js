const API_KEY = "5bba6a4538a515d41e8e57312d701502";

function onGeoOK(position) {
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    //console.log("당신의 위치", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather =document.querySelector("#weather span:first-child")
        const city =document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
    });
}

function onGeoError() {
    alert("위치정보값을 받을 수 없습니다. 새로고침을 시도해주세요!");
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError); // GPS값을 받아온다.

