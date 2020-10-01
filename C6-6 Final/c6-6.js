const sendBtn = document.querySelector("#sendBtn");
const geoBtn = document.querySelector("#geoBtn");
let currLogChat  = '';

sendBtn.addEventListener("click", ()=>{
    const message = document.querySelector(".msg").value;
    if (message){
        const websocket = new WebSocket('wss://echo.websocket.org/');
        currLogChat += `<div class = "client-request">${message}</div>`;
        document.querySelector(".dialog-div").innerHTML = currLogChat;
        websocket.onopen = function(evt){
            websocket.send(message);
        }
        websocket.onmessage = function(evt){
            currLogChat += `<div class = "server-answer">${evt.data}</div>`;
            document.querySelector(".dialog-div").innerHTML = currLogChat;
            websocket.close;
        }
        document.querySelector(".msg").value = '';
    }
});
    
geoBtn.addEventListener("click", ()=>{
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            const sendData = {"latitude": coords.latitude, "longitude": coords.longitude};
            const websocket = new WebSocket('wss://echo.websocket.org/');
            websocket.onopen = function(evt){
                websocket.send(JSON.stringify(sendData));
            }
            websocket.onmessage = function(evt){
                const gotJson = JSON.parse(evt.data);
                currLogChat += `<div class = "client-request"><a class = "geoLink" href = "https://www.openstreetmap.org/#map=15/${gotJson.latitude}/${gotJson.longitude}" target="_blank">Я тут</a></div>`;
                document.querySelector(".dialog-div").innerHTML = currLogChat;
                websocket.close;
            }
        },
        ()=>{
            alert('Невозможно получить ваше местоположение');
        });
    }
    else{
        alert("Ваш браузер не поддерживается");
    }
});