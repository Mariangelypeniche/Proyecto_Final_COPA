const menuItems = document.querySelectorAll('.menu-item')

const menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click',function(){
    document.body.classList.toggle('mobile-menu-active')
})

menuItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const currentItem = document.querySelector('.active') 
        currentItem.classList.remove('active')
        e.target.classList.add('active')    
    })
})

const toggleSwitch = document.querySelector('.input__check');

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);