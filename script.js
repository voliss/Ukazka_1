'use strict'
// Picky
const navi = document.querySelector('.navi');
const zeptej = document.querySelector('.tlacitko');
const zavri = document.querySelector('.cls');
const pozadiTmavo = document.querySelector('.dozadu');
const spodekKlik = document.querySelector('.zaklik');
const objevujH1 = document.querySelector('.obj');
const textNadH1 = document.querySelector('.text');
const sekce1 = document.querySelector('.uvod');

pozadiTmavo.classList.remove('dozadu');
spodekKlik.classList.remove('zaklik');
objevujH1.style.opacity = '0';


//Funkce
const hoverEfekt = function(e) {
    if(e.target.classList.contains('link')) {
        const klik = e.target;
        const elementy = klik.closest('.navi').querySelectorAll('.link');

        elementy.forEach(el => {
             if(el != klik) 
             el.style.opacity = this;
             el.style.transition = '0.5s';
            });
    }
}

const zastavScroll = function() {
    document.querySelector('.okno').scrollIntoView();
}

const ukazTo = function() {
    document.querySelector('.vyskok').classList.remove('schovany');
    pozadiTmavo.classList.add('dozadu');
    spodekKlik.classList.add('zaklik');
    window.addEventListener('scroll', zastavScroll);
}

const zavriTo = function() {
    document.querySelector('.vyskok').classList.add('schovany');
    pozadiTmavo.classList.remove('dozadu');
    spodekKlik.classList.remove('zaklik');
    window.removeEventListener('scroll', zastavScroll);
}

const scrollujObjev = function() {
    if(scrollY >= sekce1.scrollHeight - 80 && scrollY <= sekce1.scrollHeight - 40) {
        objevujH1.style.transition = '2s ease-in-out';
        objevujH1.style.opacity = '1';
        }
   }


// Eventy
navi.addEventListener('mouseover', hoverEfekt.bind(0.5));
navi.addEventListener('mouseout', hoverEfekt.bind(1));
zeptej.addEventListener('click', ukazTo);
zavri.addEventListener('click', zavriTo);
window.addEventListener('scroll', scrollujObjev);