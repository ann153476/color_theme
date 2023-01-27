export { colorTheme };

const body = document.querySelector('body');
const svgLight = document.querySelector('#svg-light');
const svgDark = document.querySelector('#svg-dark');
const svgSearch = document.querySelector('#svg-search');
const searchInput = document.querySelector('#search-input');
const svgMenu = document.querySelector('#svg-menu');
const svgX = document.querySelector('#svg-x');
function colorTheme(){
    body.classList.toggle('light__theme');
    body.classList.toggle('dark__theme');//body

    svgLight.classList.toggle('svg__light__theme');
    svgLight.classList.toggle('svg__dark__theme');//sun//light

    svgDark.classList.toggle('svg__light__theme');
    svgDark.classList.toggle('svg__dark__theme');//moon//dark

    svgSearch.classList.toggle('header__light__theme');
    svgSearch.classList.toggle('header__dark__theme');//лупа
    
    searchInput.classList.toggle('input__seatch__light__theme');
    searchInput.classList.toggle('input__seatch__dark__theme');//input

    svgMenu.classList.toggle('header__light__theme');
    svgMenu.classList.toggle('header__dark__theme');//menu burger

    svgX.classList.toggle('header__light__theme');
    svgX.classList.toggle('header__dark__theme');// X esc

}