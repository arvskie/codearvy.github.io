//FOR NAVBAR TOGGLE
const list = document.querySelector('#nav-ul');
const menu = document.querySelector('#navMenu-toggle');
menu.addEventListener('click', () => {
  if(menu.name === 'menu'){
    menu.name = "close"; 
    list.classList.add('top-[75px]'); 
    list.classList.add('opacity-100');
  }else{
    menu.name = "menu"; 
    list.classList.remove('top-[75px]'); 
    list.classList.remove('opacity-100');
  }
});

//FOR DARKMODE TOGGLE
class DarkMode{} //Empty Class
//Prototype for Empty class
DarkMode.prototype.setState = function(state) {
  sessionStorage.setItem('checked', state);
}
DarkMode.prototype.getState = function() {
  return sessionStorage.getItem('checked');
}

const body = document.querySelector('#Body');
const toggle = document.querySelector('#darkMode-toggle');

const darkMode = () => {
  const app = new DarkMode();
  const state = app.getState();
  if (state == 'true') {
    toggle.checked = true;  //set checkbox toggle to checked if the sesssionStorage is true
    toggle.name = "dark";   // add and remove design depending on the value of state
    body.classList.remove("bg-white"); 
    body.classList.add("bg-stone-300");
    document.documentElement.classList.add("dark"); 
  }else{
    toggle.name = "light"; 
    body.classList.add("bg-white"); 
    body.classList.remove("bg-stone-300");
    document.documentElement.classList.remove("dark");   
  }
  //click function
  toggle.addEventListener('click', function() {
    app.setState(toggle.checked);  // Set value for sessionStorage when click
      if(toggle.checked === true){   //add and remove design when click
        toggle.name = "dark";
        body.classList.remove("bg-white"); 
        body.classList.add("bg-stone-300");
      }else{
        toggle.name = "light"; 
        body.classList.add("bg-white"); 
        body.classList.remove("bg-stone-300");
      }
  });
}
//Run the darkMode Function
darkMode();
