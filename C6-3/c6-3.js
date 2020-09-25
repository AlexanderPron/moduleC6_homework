const btn = document.querySelector(".j-btn-test");
btn.addEventListener("click", ()=>{
    document.querySelector(".btn_icon_1").classList.toggle("hide");
    document.querySelector(".btn_icon_2").classList.toggle("hide");
});