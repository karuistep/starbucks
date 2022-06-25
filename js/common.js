const searchEl=document.querySelector('.search');
const searchInputEi=searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEi.focus();
});

searchInputEi.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEi.setAttribute('placeholder', '통합검색');
});

searchInputEi.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEi.setAttribute('placeholder', '');
});




const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022