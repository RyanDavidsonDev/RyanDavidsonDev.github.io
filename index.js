// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

var origButtonText
var ShowingExtraProjs = false;

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

function ReadMoreFunc() {
  console.log("HELLO WORLD")

  var MoreProjCon = document.getElementById("MoreProjectsContainer");
  var MoreProjArr = ( document.getElementsByName ("ExtraProject"))
  var moreText = document.getElementById("readMoreTextPrompt");
  var btnText = document.getElementById("ReadMoreButton");

  if (MoreProjCon.style.display ==="none") {


    MoreProjCon.style.display = "inline";
    origButtonText = btnText.innerHTML
    btnText.innerHTML = "Hide Extra Projects"; 
    moreText.style.display = "none";
    
    //set button text
  } else {

    MoreProjCon.style.display = "none";
    btnText.innerHTML = origButtonText; 
    moreText.style.display = "inline";

  }
} 

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
