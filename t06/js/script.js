let getlab = document.getElementById('lab');
let getHero = document.getElementById('hero');

function transformation() {
    if (getHero.textContent === 'Bruce Banner') {
        getHero.textContent = 'Hulk';
        getHero.style.fontSize = '130px';
        getHero.style.letterSpacing = '6px';
        getlab.style.background = '#70964b';
      } else {
        getHero.textContent = 'Bruce Banner';
        getHero.style.fontSize = '60px';
        getHero.style.letterSpacing = '2px';
        getlab.style.background = '#ffb300';
      }
};