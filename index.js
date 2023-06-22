//--------------табы---------------//
var tabs = document.getElementById('icetab-container').children;
var tabcontents = document.getElementById('icetab-content').children;

var myFunction = function() {
  var tabchange = this.mynum;
  for(var int=0;int<tabcontents.length;int++){
    tabcontents[int].className = ' tabcontent';
    tabs[int].className = ' icetab';
  }
  tabcontents[tabchange].classList.add('tab-active');
  this.classList.add('current-tab');
} 


for(var index=0;index<tabs.length;index++){
  tabs[index].mynum=index;
  tabs[index].addEventListener('click', myFunction, false);
}

//--------------кнопка---------------//
// считываем кнопку
const goTopBtn = document.querySelector(".go-top");

// обработчик на скролл окна
window.addEventListener("scroll", trackScroll);
// обработчик на нажатии
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  // вычисляем положение от верхушки страницы
  const scrolled = window.pageYOffset;
  // считаем высоту окна браузера
  const coords = document.documentElement.clientHeight;
  // если вышли за пределы первого окна
  if (scrolled > coords) {
    // кнопка появляется
    goTopBtn.classList.add("go-top--show");
  } else {
    // иначе исчезает
    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {
  // пока не вернулись в начало страницы
  if (window.pageYOffset > 0) {
    // скроллим наверх
    window.scrollBy(0, -75); // второй аргумент - скорость
    setTimeout(goTop, 0); // входим в рекурсию
  }
}


//-----сообщение об элементе меню------
let a=document.querySelector('.menu-item');
a.addEventListener("click",function(){alert("Извините, пока не работает")})




//------градиентная кнопка-----
document.querySelector('.knopka').onmousemove = function (e) {
  var x = e.pageX - e.target.offsetLeft;
  var y = e.pageY - e.target.offsetTop;
  e.target.style.setProperty('--x', x + 'px');
  e.target.style.setProperty('--y', y + 'px');
  };




