import mongoose from "https://john202021.github.io/node_modules/mongoose/index.js";

const navBar = document.getElementsByClassName("navbar")[0];
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navLinksLength = document.getElementsByClassName("nav-link").length;
const mediaQuery = window.matchMedia("(min-width: 715px)");
const mediaQuery2 = window.matchMedia("(max-width: 715px)");
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const max_height = navLinksLength * 2.25 - 0.25;
        
toggleButton.addEventListener("click", async () => {
    navbarLinks.classList.toggle("active");
    navBar.style.padding = 0;

    if (navbarLinks.classList.contains("active")) {
        toggleButton.style.transform = "rotate(90deg)";
        let msWait = 0;
        for (let height = 0; height <= max_height; height += 0.25) {
            
            navbarLinks.style.height = height + "rem"

            if (!navbarLinks.classList.contains("active")) {
                navbarLinks.style.height = 0;
                navBar.style.padding = "10px 0";
                break;
            }
            await wait(msWait);
            msWait += 0.25;
        } 
    } else {
        navBar.style.padding = "10px 0";
        toggleButton.style.transform = "rotate(0deg)"
        navbarLinks.style.height = 0;
    }
});

mediaQuery.addEventListener("change", handleMediaChange);


function handleMediaChange(media) {
    if (media.matches) {
        navbarLinks.style.height = "unset";
        navBar.style.padding = "10px 0";

        mediaQuery2.addEventListener("change", revertMediaChange);
    }
}

function revertMediaChange(media) {
    if (media.matches) {
        if (navbarLinks.classList.contains("active")) {
            navBar.style.padding = 0;
            console.log("It matches")
        }
    }
}

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to the database.');
}).catch((err) => {
    console.log(err);
});

