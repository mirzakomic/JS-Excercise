function adult() {
 const ergebnisAge = document.querySelector(".ergebnis1");
 const userAge = document.querySelector("#input-alter").value;
 if (userAge >= 18) {
    ergebnisAge.innerHTML = "Volljährig";
    console.log(true);
 } else {
    ergebnisAge.innerHTML = "Minderjährig"
       console.log(false);
 }
}

function weather() {
const weatherScale = Number(document.querySelector("#input-weather").value);
const weatherOutput = document.querySelector(".ergebnis2");
if (weatherScale == 0 || weatherScale <= 2) {
    weatherOutput.innerHTML = "schlecht";
} else if (weatherScale == 3 || weatherScale <= 5) {
    weatherOutput.innerHTML = "ok";
} else if (weatherScale == 6 || weatherScale <= 7) {
    weatherOutput.innerHTML = "gut";
} else if (weatherScale == 8 || weatherScale <= 10) {
    weatherOutput.innerHTML = "super";
}
}

function checkAirQuality() {
    let airQualityNum = Number(document.querySelector("#air-q").value);
    let bodyStyle = document.querySelector("body");
    let airOutput = document.querySelector(".h-concern");
    let airOutput2 = document.querySelector(".h-effect");

    if (airQualityNum == 0 || airQualityNum <= 50) {
        airOutput.innerHTML = "good";
        airOutput2.innerHTML = "little to no risk";
        bodyStyle.style.backgroundColor = "green";
    } else if (airQualityNum <= 50 || airQualityNum <= 100) {
        airOutput.innerHTML = "moderate";
        airOutput2.innerHTML = "acceptable quality";
        bodyStyle.style.backgroundColor = "orange";
    } else if (airQualityNum >= 100 || airQualityNum <= 150) {
        airOutput.innerHTML = "unhealthy for sensitive groups";
        airOutput2.innerHTML = "Generable publics not likely affected";
        bodyStyle.style.backgroundColor = "red";
    }
}

function rechnen() {
    let zNum = Number(document.querySelector("#zufallsnr").value);
    let zErgebnis = document.querySelector(".diff");

    let zNumDiff = zNum - 27;

    if (zNum > 27) {
        zNumDiff = zNumDiff*2;
        zErgebnis.innerHTML = zNumDiff;
    } else if (zNum <= 27) {
        zErgebnis.innerHTML = 0;
    }
}

function greaterThan() {
    let alterShisha = Number(document.querySelector("#input").value);
    let shishaErgebnis = document.querySelector(".shisha-ergebnis");

    if (alterShisha >= 18) {
        shishaErgebnis.innerHTML = "Ja, du kannst Shisha rauchen.";
    } else {
        shishaErgebnis.innerHTML = "Nein, du darfst keine Shiha rauchen";
    }
}