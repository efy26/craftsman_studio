 // ========= variables for menu ===========
const btn_menu = document.querySelector(".container_nav_bar p");
const open_list_menu = document.querySelector(".menu_list_elements");
const menu_select = document.querySelector(".select_menu");
const menu_no_select = document.querySelector(".menu_no_select");
 // ========= and variables for menu ===========

  // ========= variables for slide ===========
 let carousel = document.querySelectorAll(".carousel");
 let indice = 1;

 const slideAu = (valeur) => {
    valeur.classList.add("menu_active")
} 
const slideDi = (valeur) => {
    valeur.classList.remove("menu_active")
} 
 // ========= and variables for slide ===========

window.onload = () => {
    slideAu(carousel[indice])
    // ========= evenements for menu ===========
    btn_menu.addEventListener("click", forOpenMenu)
    menu_select.addEventListener("click", forCloseMenu)
     // ========= and evenements for menu ===========

    // ========= evenements for slide ===========
     setInterval(imgSlide, 3000)
     // ========= evenements for slide ===========
     
}

// ========= functions for menu ===========
const forOpenMenu = (e) => {
    e.preventDefault();
    menu_select.style=" display: unset;";
    menu_no_select.style="display: none;";
    document.querySelector(".menu_list_elements").style="height: 475px; overflow: scroll;"
}
const forCloseMenu = (e) => {
    e.preventDefault();
    menu_select.style="display: none;";
    menu_no_select.style="display: unset;";
    document.querySelector(".menu_list_elements").style="height: 0px; overflow: hidden;"
}
// ========= and functions for menu ===========

// ========= functions for slide ===========
const imgSlide = () => {

    slideDi(carousel[indice])
    slideAu(carousel[indice+1])

    indice = indice+1

    if (indice == 4 ) {
        indice = 1;

        slideDi(carousel[indice])
        slideAu(carousel[indice])
        
        indice = indice
    }
}
// ========= and functions for slide ===========

// =========  images ===========
    

// =========  and images ===========

