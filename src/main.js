// show menu
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

        toggle.addEventListener("click", ()=>{
            // show menu class to nav menu
            nav.classList.toggle("show-menu")
            // add show icon to show and hide menu icon
            toggle.classList.toggle('show-icon')
        })

 }

 showMenu('nav-toggle', 'nav-menu');