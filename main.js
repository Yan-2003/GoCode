var load = document.getElementById("loader")
var content = document.querySelector(".body--content--main")


window.addEventListener("load", function()
{
    load.style.display = "none";
    content.classList.remove("hide")
    content2.classList.remove("hide")

})
/**This is the menu fuction of close and open event */
var contentSub = document.querySelector(".window--sub--content")
var windoww = document.querySelector(".window")
var menu = document.querySelector(".menu")
var closee = document.querySelector(".close")

menu.addEventListener('click', function()
{
    windoww.classList.add("active")
    contentSub.classList.add("active")
})

closee.addEventListener('click', function()
{
    windoww.classList.remove("active")
    contentSub.classList.remove("active")
})


/**This is the menu fuction switch on every page*/
var home = document.querySelector(".body--content--main")
var download = document.querySelector(".body--content--download")  
var contact = document.querySelector(".boddy--content--contact")
var about = document.querySelector(".boddy--content--about")
var bnt1 = document.getElementById("home")
var bnt2 = document.getElementById("download")
var bnt3 = document.getElementById("about")
var bnt4 = document.getElementById("contact")


bnt1.addEventListener('click', function()
{
    windoww.classList.remove("active")
    contentSub.classList.remove("active")
    home.classList.remove("hide")
    download.classList.add("hide")
    about.classList.add("hide")
    contact.classList.add("hide")
})

bnt2.addEventListener('click', function()
{
    windoww.classList.remove("active")
    contentSub.classList.remove("active")
    home.classList.add("hide")
    download.classList.remove("hide")
    about.classList.add("hide")
    contact.classList.add("hide")
})

bnt3.addEventListener('click', function()
{
    windoww.classList.remove("active")
    contentSub.classList.remove("active")
    home.classList.add("hide")
    download.classList.add("hide")
    about.classList.remove("hide")
    contact.classList.add("hide")
})

bnt4.addEventListener('click', function()
{
    windoww.classList.remove("active")
    contentSub.classList.remove("active")
    home.classList.add("hide")
    download.classList.add("hide")
    about.classList.add("hide")
    contact.classList.remove("hide")
})






