const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navLinksLength = document.getElementsByClassName("nav-link").length;
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const max_height = navLinksLength * 2.25;
        
toggleButton.addEventListener("click", async () => {
    navbarLinks.classList.toggle("active");

    if (navbarLinks.classList.contains("active")) {
        toggleButton.style.transform = "rotate(90deg)";
        for (let height = 0; height <= max_height; height += 0.25) {
            console.log(height + "%");
    
            navbarLinks.style.height = height + "rem"

            if (!navbarLinks.classList.contains("active")) {
                navbarLinks.style.height = 0;
                break;
            }
            await wait(7);
        } 
    } else {
        toggleButton.style.transform = "rotate(0deg)"
        navbarLinks.style.height = 0;
    }
    

});