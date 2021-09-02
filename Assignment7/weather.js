// date
let current = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let time = days[current.getDay()] + ", " + current.getDate() + " " + month[current.getMonth()];

document.getElementById('date').innerHTML = time;

//--------------weather

let input = document.querySelector("input");
let box = document.getElementById("a1");
const enterb = document.querySelector('#searchicon');
let area = document.getElementById('a1');

//----------enter key
input.addEventListener('keypress', (e) => {
    if (e.which === 13) {
        if (input.value === "") {

            alert("Enter a city!");

        } else {

            let city = input.value;
            search(city);

        }

    }
})

//----------search button
enterb.addEventListener('click', () => {
    if (input.value === "") {

        alert("Enter a city!");

    } else {

        let city = input.value;
        search(city);

    }

})

//----------city entered
function search(city) {

    while (area.firstChild) {
        area.removeChild(area.firstChild);
    }

    input.value = "";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84466c088174f6e60d8abdd7d7935291&units=metric`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            if (data.cod === '404') {
                alert("Invalid City");
                return;
            } else {
                let temp = Math.round(data.main.temp);
                let feellike = Math.round(data.main.feels_like);
                let humidity = data.main.humidity;
                let mint = Math.round(data.main.temp_min);
                let maxt = Math.round(data.main.temp_max);
                let weathr = data.weather[0].description;
                let precipitation = data.clouds.all;
                let visib = (data.visibility) / 1000;

                addbox(temp, feellike, humidity, mint, maxt, weathr, city, precipitation, visib);
            }

        })
        .catch((err) => {
            console.log(err.message);
        });

}

//------------Adding container
function addbox(temp, feellike, humidity, mint, maxt, weathr, city, precipitation, visib) {

    let c = city.toUpperCase();
    let w = weathr.toUpperCase();

    area.innerHTML = `
                    <section id="container">
                        <div class="t1">
                            <img src="https://img.icons8.com/color/48/000000/marker--v2.png"/>
                            ${c}
                        </div>

                        <div class="t2">${temp}°C</div>

                        <div class="t3">${w}</div>

                        <div class="t4">Max-${maxt}°C/Min-${mint}°C</div>

                        <div class="t5">
                            <span>Feel's Like &nbsp;&nbsp;&nbsp; ${feellike}°Celsius</span>
                            <span>Humidity &nbsp;&nbsp;&nbsp; ${humidity}%</span>
                            <span>Visibility &nbsp;&nbsp;&nbsp; ${visib} km</span>
                            <span>Chance of rain &nbsp;&nbsp;&nbsp; ${precipitation}%</span>
                        </div>
                    </section>    
                    `;

    changeback(w);

}

//----------------change background,text color
function changeback(w) {
    let conText = document.getElementById('container');

    if (w.includes("CLOUD")) {
        conText.style.color = "black";
        document.body.style.color = "white";
        document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/548702.jpg')";
    } else if (w.includes("SUN")) {
        conText.style.color = "black";
        document.body.style.color = "black";
        document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/535628.jpg')";
    } else if (w.includes("SNOW")) {
        conText.style.color = "black";
        document.body.style.color = "black";
        document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/946591.jpg')";
    } else if (w.includes("HAZE")) {
        conText.style.color = "white";
        document.body.style.color = "white";
        document.body.style.backgroundImage = "url('https://c.wallhere.com/photos/42/69/1920x1080_px_field_landscape_mist_river-709119.jpg!d')";
    } else if (w.includes("CLEAR")) {
        conText.style.color = "black";
        document.body.style.color = "black";
        document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/1779003.jpg')";
    } else if (w.includes("RAIN")) {
        conText.style.color = "black";
        document.body.style.color = "black";
        document.body.style.backgroundImage = "url('https://www.teahub.io/photos/full/1-16262_preview-wallpaper-umbrella-rain-drops-cane-clouds-rain.jpg')";
    } else if (w.includes("MIST")) {
        conText.style.color = "black";
        document.body.style.color = "white";
        document.body.style.backgroundImage = "url('https://www.teahub.io/photos/full/277-2778644_nature-and-mist.jpg')";
    }

}