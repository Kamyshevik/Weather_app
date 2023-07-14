const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "c733f9f7e9a024bc8ee8cdc34f0ac1f1"
}
const input = document.querySelector("#input");
    input.addEventListener("keypress", enter);
    function enter(e) {
        if(e.keyCode === 13) {
        getInfo(input.value);
        }
    }
    async function getInfo(data){ 
        const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&APPID=${api.key}`);
        const result = await res.json();
        console.log (result)
        displayResult (result); 
    }
    function displayResult(result){

        let city = document.querySelector("#city");
        city.textContent = `${result.name}, ${result.sys.country}`;

        getOurDate(); 
        getOurWeather(result)
        getCondition(result);

        let temperature = document.querySelector ("#temperature");
        temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`; 

        let feelsLike = document.querySelector ("#feelsLike");
        feelsLike.innerHTML = `<span>Feels like: </span>${Math.round(result.main.feels_like)}<span>°</span>`;

        let conditions = document.querySelector ("#conditions");
        conditions.textContent = `${result.weather[0].main}`;
        
        let wind = document.querySelector ("#wind");
        wind.innerHTML = `<span>💨</span>${Math.round(result.wind.speed)}<span>m/s</span>` + " " + `<span>💧</span>${Math.round(result.main.humidity)}<span>%</span>`;

        let variation = document.querySelector ("#variation");
        variation.innerHTML = "Min: " + `${Math.round(result.main.temp_min)}<span>°</span>` + " " + "Max: " + `${Math.round(result.main.temp_max)}<span>°</span>`;
        
    }
        function getOurDate(){  
            const myDate = new Date();
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let day = days[myDate.getDay()];
            let todayDay = myDate.getDate();
            let month = months[myDate.getMonth()];
            let year = myDate.getFullYear();
            let showDate = document.querySelector("#date");
            showDate.textContent = `${day}` + " " + `${todayDay}` + " " + `${month}` + " " + `${year}`  
        }

        let myVideoFon = document.querySelector("#myVideoFon");
        
        function getOurWeather(result){
        let conditions = result.weather[0].main;
        
        myVideoFon.style.display = "block";

        if (conditions === 'Clouds'){
            myVideoFon.src = "coverr-cloud-timelapse-8383-1080p.mp4";
        }
        if (conditions === 'Sunny' || conditions === 'Clear'){
            myVideoFon.src = "coverr-walking-in-central-park-4412-1080p.mp4";
        }
        if (conditions === 'Rain' || conditions === 'Thunderstorm'){
            myVideoFon.src = "https://cdn.glitch.com/eeaf6ebc-3ee8-45cf-aa54-1394e24c3353%2Frain-video.mp4?v=1628681267721";
        }
        if (conditions === 'Snow'){
            myVideoFon.src = "https://cdn.coverr.co/videos/coverr-snow-falling-by-a-river-5197/1080p.mp4";
        }
        if (conditions === 'Mist' || conditions === 'Fog' || conditions === 'Haze'){
            myVideoFon.src = "coverr-forest-covered-by-a-thick-fog-3180-1080p.mp4";
        }
    }
        function getCondition(result){

        let conditions = document.querySelector("#conditions");
        conditions.innerHTML = result.weather[0].description;
    }


        