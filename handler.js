
    var sunDiv = document.getElementById("sunDiv")
    var sun = document.createElement("img")
    sun.classList = "sun"
    sun.src = "sun.jpg"

    moonDiv = document.getElementById("moonDiv")
    var moon = document.createElement("img")
    moon.classList = "sun"
    moon.src = "moon.jpg"

    sunDiv.appendChild(sun)

    function changeToMoon() {
        sunDiv.innerHTML = ""
        moonDiv.appendChild(moon)
    }

    function changeToSun() {
        moonDiv.innerHTML = ""
        sunDiv.appendChild(sun)
    }