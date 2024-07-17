let heroText = document.querySelector('.hero p')
window.addEventListener("scroll", ()=>{
    let scrollvalue = window.scrollY;
   heroText.style.marginTop = scrollvalue * 4 + 'px';
})