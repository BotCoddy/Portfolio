// Mobile Navigation
const showMobile = document.querySelector(".showMobile");
const hideMobile = document.querySelector(".hideMobile");
let Mobile = document.querySelector(".nav-icons-mobile");

showMobile.addEventListener("click", () => {
    Mobile.style.display = "flex";
});

hideMobile.addEventListener("click", () => {
    Mobile.style.display = "none";
});


// CopyRight Year
let CopyRightYear = document.querySelector(".copyright-year");
const today = new Date();
let Year = today.getFullYear();
CopyRightYear.innerText = Year;



// GO TO HIRE ME
const ShowHireMe1 = document.querySelector(".hireMe-Nav");
const ShowHireMe2 = document.querySelector(".hireMe-banner");
const ShowHireMeMobile = document.querySelector(".hireMe-mobile");
const ShowHireMeMobileBanner = document.querySelector(".hire-me-mobile-banner");
const ShowHireMeMobileReferee = document.querySelector(".hireMe-referees");

const hireme = () => {
    window.location.href = "./hireme.html"
}

ShowHireMe1.addEventListener("click", hireme);
ShowHireMe2.addEventListener("click", hireme);
ShowHireMeMobile.addEventListener("click", hireme);
ShowHireMeMobileBanner.addEventListener("click", hireme);



// LOAD ABOUT PAGE USING BUTTON KNOW ME MORE
function loadAbout(){
    window.location.href = "./about.html";
}




