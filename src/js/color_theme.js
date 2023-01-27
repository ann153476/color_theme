export { colorTheme };

const body = document.querySelector('body');
const svgLight = document.querySelector('#svg-light');
const svgDark = document.querySelector('#svg-dark');
const svgSearch = document.querySelector('#svg-search');
const searchInput = document.querySelector('#search-input');


function colorTheme(){
    body.classList.toggle('light');
    body.classList.toggle('dark');
    svgLight.classList.toggle('light__svg');
    svgLight.classList.toggle('dark__svg');
    svgDark.classList.toggle('light__svg');
    svgDark.classList.toggle('dark__svg');  
    svgSearch.classList.toggle('search__theme__light');
    svgSearch.classList.toggle('search__theme__dark');
    searchInput.classList.toggle('search__theme__light');
    searchInput.classList.toggle('search__theme__dark');

}