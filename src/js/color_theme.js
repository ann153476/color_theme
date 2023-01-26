export { colorTheme };

const body = document.querySelector('body');
const svgLight = document.querySelector('#svg-light');
const svgDark = document.querySelector('#svg-dark');
 
function colorTheme(){
    body.classList.toggle('light');
    body.classList.toggle('dark');
    svgLight.classList.toggle('light__svg');
    svgLight.classList.toggle('dark__svg');
    svgDark.classList.toggle('light__svg');
    svgDark.classList.toggle('dark__svg');    
}