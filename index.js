const images = ['fox1', 'fox2', 'fox3', 'fox4'];
const imgElem = document.querySelector('img');

// Detects if device is on iOS 
const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
    }
    // Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
    // alert('IOS');
    this.setState({ showInstallMessage: true });
} else {
    // alert('Android');
}

function randomValueFromArray(array) {
    let randomNo = Math.floor(Math.random() * array.length);
    return array[randomNo];
}

setInterval(function() {
    let randomChoice = randomValueFromArray(images);
    imgElem.src = 'images/' + randomChoice + '.jpg';
}, 2000)

// Register service worker to control making site work offline

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('https://aarvitech.com/Research/PWA/pwa-examples-master/a2hs/sw.js')
        .then(function() { console.log('Service Worker Registered'); });
}

// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';

    addBtn.addEventListener('click', (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});

function notification() {
    const options = {
        body: "Testing Our Notification",
        icon: "/img/logo.png"
    };

    new Notification("Hi there!!", options);
}

function displayNotification() {
    if (window.Notification && Notification.permission === "granted") {
        notification();
    } else if (window.Notification && Notification.permission !== "denied") {
        Notification.requestPermission(status => {
            if (status === "granted") {
                notification();
            } else {
                alert("You denied or dismissed permissions to notifications.");
            }
        });
    } else {
        alert(
            "You denied permissions to notifications. Please go to your browser or phone setting to allow notifications."
        );
    }
}

if ('PushManager' in window) {
    console.log('Service Workers Push Notification is supported');
} else {
    // alert('Sorry, Push notification isn\'t supported in your browser.');
    console.log('Sorry, Push notification isn\'t supported in your browser.');
}



if (Notification.permission === 'denied') {
    alert('User has blocked push notification.');
}

/* GIO LOCATION*/

if ('geolocation' in navigator) {

    // navigator.geolocation.getCurrentPosition(function (location) {
    //     appendLocation(location, 'fetched');
    // });
    // watchId = navigator.geolocation.watchPosition(appendLocation);
    getLocation();
    console.log('Geolocation API supported');
} else {
    alert('Sorry, Geolocation API isn\'t supported in your browser.');
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setCurrentPosition, positionError, { enableHighAccuracy: false, timeout: 15000, maximumAge: 0 });
    }
}

function setCurrentPosition(position) {
    // document.querySelector('.accuracy').innerHTML = position.coords.accuracy;
    // document.querySelector('.altitude').innerHTML = position.coords.altitude;
    // document.querySelector('.altitudeAccuracy').innerHTML = position.coords.altitudeAccuracy;
    // document.querySelector('.heading').innerHTML = position.coords.heading;
    // document.querySelector('.latitude').innerHTML = position.coords.latitude;
    // document.querySelector('.longitude').innerHTML = position.coords.longitude;
    // document.querySelector('.speed').innerHTML = position.coords.speed;
    console.log('accuracy' + position.coords.accuracy);
    console.log('altitude' + position.coords.altitude);
    console.log('altitudeAccuracy' + position.coords.altitudeAccuracy);
    console.log('heading' + position.coords.heading);
    console.log('latitude' + position.coords.latitude);
    console.log('longitude' + position.coords.longitude);
    console.log('speed' + position.coords.speed);
    // alert('longitude' + position.coords.longitude);
}



function positionError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.error("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.error("An unknown error occurred.");
            break;
    }
}

function locationError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            return "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            return "Location information is unavailable."
            break;
        case error.TIMEOUT:
            return "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            return "An unknown error occurred."
            break;
    }
}

var geoWatch;

function startWatch() {
    if (!geoWatch) {
        if ("geolocation" in navigator && "watchPosition" in navigator.geolocation) {
            geoWatch = navigator.geolocation.watchPosition(setCurrentPosition, positionError, { enableHighAccuracy: false, timeout: 15000, maximumAge: 0 });
        }
    }
}

function stopWatch() {
    navigator.geolocation.clearWatch(geoWatch);
    geoWatch = undefined;
}

/* GIO LOCATION*/

// if ('Notification' in window) {
//     Notification.requestPermission(result => {
//         if (result === 'granted') {
//             console.log('Notification Acess granted! :)')
//             navigator.serviceWorker.ready.then(registration => {
//                 registration.showNotification('Vibration Sample', {
//                     body: 'Buzz! Buzz!',
//                     tag: 'vibration-sample'
//                 });
//             });
//         } else if (result === 'denied') {
//             console.log('Notification Access denied :(')
//         } else {
//             console.log('Notification Request ignored :/')
//         }
//     })
// }