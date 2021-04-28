'use strict';
import {Lifestyle, City, Fashion, Nature, Portrait} from './picUrl.js';
import Refs from './refs';
import openScrollSnap from './ScrollSnap';
export default
console.log('no errors here ))')
Refs.links.forEach(link => link.addEventListener('click', event => {
    const clickedEl = event.currentTarget;
    if (clickedEl.textContent.includes('Lifestyle')) {
        returnList(Lifestyle);
    } else if (clickedEl.textContent.includes('City')) {
        returnList(City);
    } else if (clickedEl.textContent.includes('Fashion')) {
        returnList(Fashion);
    } else if (clickedEl.textContent.includes('Nature')) {
        returnList(Nature);
    } else  {
        returnList(Portrait);
    }
    Refs.list.classList.add('hide');
    Refs.innerTitle.textContent = clickedEl.textContent;
    Refs.innerContainer.classList.remove('hide');
    if (clickedEl.textContent.includes('Lifestyle')) {
         openScrollSnap(Lifestyle);
    } else if (clickedEl.textContent.includes('Portrait')) {
        openScrollSnap(Portrait);
    } else if (clickedEl.textContent.includes('Fashion')) {
        openScrollSnap(Fashion);
    } else if (clickedEl.textContent.includes('Nature')) {
        openScrollSnap(Nature);
    } else if (clickedEl.textContent.includes('City')) {
        openScrollSnap(City);
    }

}))

Refs.innerBtn.addEventListener('click', () => {
    Refs.list.classList.remove('hide');
    Refs.innerContainer.classList.add('hide');
    Refs.innerList.innerHTML = '';
})

function returnList(imageSrc) {
    if (window.screen.width > 768) {
        imageSrc.forEach(img => {
            let idx = 0
            Refs.innerList.insertAdjacentHTML('beforeend', `<img class="main__inner-img" id=${idx} src=${img} alt="">`)
            const innerImg = document.querySelectorAll('.main__inner-img');
            innerImg.forEach(img => img.setAttribute('id', idx++))
        })
    } else {
        return
    }
}
