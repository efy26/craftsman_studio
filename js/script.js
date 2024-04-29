 // ========= variables for menu ===========
const btn_menu = document.querySelector(".container_nav_bar p");
const open_list_menu = document.querySelector(".menu_list_elements");
const menu_select = document.querySelector(".select_menu");
const menu_no_select = document.querySelector(".menu_no_select");
const link_rdv = document.querySelector("#nav_link");
const contacts = document.querySelector(".contacts");
const nav_links = document.querySelector("#nav_links");
const link_rdv_classic = document.querySelector("#nav_link_classic");
const contacts_classic = document.querySelector(".contacts_menu_classic");
const nav_links_classic = document.querySelector("#nav_links_classic");

 // ========= and variables for menu ===========


window.onload = () => {
    // ========= evenements for menu ===========
        btn_menu.addEventListener("click", forOpenMenu)
        menu_select.addEventListener("click", forCloseMenu)
        link_rdv.addEventListener("click", forOpenMenuRdv)
        nav_links.addEventListener("click", forCloseMenuRdv)
    // =======
        link_rdv_classic.addEventListener("click", forOpenMenuRdv_classic)
        nav_links_classic.addEventListener("click", forCloseMenuRdv_classic)
     // ========= and evenements for menu ===========

    // ========= evenements for slide ===========
        setInterval(imgSlide, 2500)
    // ========= evenements for slide ===========
     
}

// ========= functions for menu ===========
const forOpenMenu = (e) => {
    e.preventDefault();
    menu_select.style=" display: unset;";
    menu_no_select.style="display: none;";
    document.querySelector(".menu_list_elements").style="height: 450px; overflow: scroll;"
}
const forCloseMenu = (e) => {
    e.preventDefault();
    menu_select.style="display: none;";
    menu_no_select.style="display: unset;";
    document.querySelector(".menu_list_elements").style="height: 0px; overflow: hidden;"
}
const forOpenMenuRdv = (e) => {
    e.preventDefault();
    nav_links.style=" display: unset;";
    link_rdv.style="display: none;";
    contacts.style="height: 40px; overflow: unset;"
}
const forCloseMenuRdv = (e) => {
    e.preventDefault();
    nav_links.style="display: none;";
    link_rdv.style="display: unset;";
    contacts.style="height: 0px; overflow: hidden; padding: 0px 0px;"
}
// ============
const forOpenMenuRdv_classic = (e) => {
    e.preventDefault();
    nav_links_classic.style=" display: unset;";
    link_rdv_classic.style="display: none;";
    contacts_classic.style="height: 40px; overflow: unset;"
}
const forCloseMenuRdv_classic = (e) => {
    e.preventDefault();
    nav_links_classic.style="display: none;";
    link_rdv_classic.style="display: unset;";
    contacts_classic.style="height: 0px; overflow: hidden;"
}
// ========= and functions for menu ===========


  // ========= variables for slide ===========
  let carousel = document.querySelectorAll(".carousel");

  let indice = 0;

  let nbr_img = carousel.length

  const slideDi = () => {
     for (let i = 0; i < nbr_img; i++) {
       carousel[i].classList.remove("menu_active");
       
     }
    
 } 
  // ========= and variables for slide ===========


// ========= functions for slide ===========
    const imgSlide =() => {
    indice++
    if (indice >= 3) {
        indice = 0
    }
    slideDi()
    
    carousel[indice].classList.add("menu_active");
}

// ========= and functions for slide ===========



