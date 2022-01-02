const d = document,
   ls = localStorage;

export default function darkTheme(btn, classDark, classActive){
    const $themeBtn = d.querySelector(btn);  
    
    $themeBtn.addEventListener('click', () => {
      d.body.classList.toggle(classDark);
      $themeBtn.classList.toggle(classActive);
    
      //guardamos el modo en localStorage
      if(document.body.classList.contains(classDark)){
         localStorage.setItem('dark-mode', 'true');
      }else{
        localStorage.setItem('dark-mode', 'false');
      }
    });

    //Obtenemos el modo actual
   if(localStorage.getItem('dark-mode') === 'true'){
      d.body.classList.add(classDark);
      $themeBtn.classList.add(classActive);
   }else{
      d.body.classList.remove(classDark);
      $themeBtn.classList.remove(classActive);
   }
}