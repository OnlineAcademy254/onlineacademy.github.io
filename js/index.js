const hamburger = document.querySelector(".hamburger");
    const navmenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navmenu.classList.toggle("active");
    })

    function myFunction(){
        var dot = document.getElementById("dot");
        var more = document.getElementById("more");
        var btnmore = document.getElementById("btnmore");
    
        if (dot.style.display === "none"){
            dot.style.display = "inline";
            btnmore.innerHTML = "Read more";
            more.style.display = "none";
        } 
        else {
            dot.style.display = "none";
            btnmore.innerHTML = "Read less";
            more.style.display = "inline";
        }
    }
    
    function myFunction1(){
        var dot = document.getElementById("dot1");
        var more = document.getElementById("more1");
        var btnmore = document.getElementById("btnmore1");
    
        if (dot.style.display === "none"){
            dot.style.display = "inline";
            btnmore.innerHTML = "Read more";
            more.style.display = "none";
        } 
        else {
            dot.style.display = "none";
            btnmore.innerHTML = "Read less";
            more.style.display = "inline";
        }
    }