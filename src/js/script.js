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
DarkMode.prototype.setState = (state) => {
  sessionStorage.setItem('checked', state);
}
DarkMode.prototype.getState = () => {
  return sessionStorage.getItem('checked');
}
//Variables
const body = document.querySelector('#Body');
const toggle = document.querySelector('#darkMode-toggle');
//Function
const darkMode = () => {
  const app = new DarkMode();
  const state = app.getState();

  if (state == 'true') {
    toggle.checked = true;  //set checkbox toggle to checked if the sesssionStorage is true
    document.documentElement.classList.add("dark"); 
  }else{
    document.documentElement.classList.remove("dark");   
  }
  //click function
  toggle.addEventListener('click', function() {
    app.setState(toggle.checked);  // Set value for sessionStorage when click
      if(toggle.checked === true){   //add and remove design when click
        document.documentElement.classList.add("dark"); 
      }else{
        document.documentElement.classList.remove("dark");  
      }
  });
}
//Run the darkMode Function
darkMode();




