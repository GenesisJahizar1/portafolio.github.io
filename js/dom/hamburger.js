export default function hamburgerMenu(panelBtn, panel, menulink){
    const d = document;

    d.addEventListener("click", e => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){ //el asterisco significa todo lo que esta dentro de panelBtn (en este caso el span)
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
        
        if(e.target.matches(menulink)) {
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");  
        }
    
    });
}