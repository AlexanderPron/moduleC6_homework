let btn = document.querySelector(".j-btn-test");
btn.addEventListener("click", () =>{
    const sw = window.screen.width;
    const sh = window.screen.height;
    const ww = window.innerWidth;
    const wh = window.innerHeight;
    const wcw = document.documentElement.clientWidth;
    const wch = document.documentElement.clientHeight;


    alert(`Ширина экрана: ${sw}px \nВысота экрана: ${sh}px\nШирина окна: ${ww}px \nВысота окна: ${wh}px\nШирина экрана без учёта полосы прокрутки: ${wcw}\nВысота экрана без учёта полосы прокрутки: ${wch}`);
});