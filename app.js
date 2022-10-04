const dropdown = document.querySelectorAll(".dropdown");
const menu = document.querySelector(".menu");


dropdown.forEach(function(item){
    item.addEventListener("click", function(){
        item.parentElement.classList.toggle("link-oppen")
        //test          document.body.classList.toggle("nav-open");
    });
});

menu.addEventListener("click",function(){
    menu.parentElement.classList.toggle("open");
    document.body.classList.toggle("nav-open");
})

console.log(dropdown)