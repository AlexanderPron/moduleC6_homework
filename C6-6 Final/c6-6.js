const sendBtn = document.querySelector("#sendBtn");
const geoBtn = document.querySelector("#geoBtn");
let currLogChat  = '';

sendBtn.addEventListener("click", (e)=>{
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
    

geoBtn.addEventListener("click", (e)=>{
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { coords } = position;
          alert(coords.latitude+'  '+coords.longitude);
        });
    }
});