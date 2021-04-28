'use strict';


let galleryImg = []


const headerListRef = document.querySelectorAll('.header__list-item');
const headerAfterRef = document.querySelectorAll('.kapec');
const list = document.querySelector('.main__list');
const links = document.querySelectorAll('.main__list-item');
const innerContainer = document.querySelector('.main__inner-container');
const innerItems = document.querySelectorAll('.main__inner-item');
const innerList = document.querySelector('.main__inner-list');
const innerImgLink = document.querySelectorAll('.main__inner-img-link');
const innerImg = document.querySelectorAll('.main__inner-img');
const innerTitle = document.querySelector('.main__inner-title');
const innerBtn = document.querySelector('.main__inner-btn');
const overlayRef = document.querySelector('.Overlay');
const modalRef = document.querySelector('.Modal');
const modalImgRef = document.querySelector('.modal__img');
const btnNext = document.querySelector('.modal__btn--next');
const btnPrev = document.querySelector('.modal__btn--prev');


headerListRef.forEach(link1 => link1.addEventListener('click', () => {
    headerAfterRef.forEach(link2 => {
        const clickedEl = event.currentTarget;
        clickedEl.firstElementChild.classList.add('active');
            clickedEl.firstElementChild.classList.remove('kapec')
    },
    )
}))


function sorted_api(api_data, sortedArg) {
    let newArr = api_data.filter(({name_album})=> name_album === sortedArg)
    const urlArr = newArr.reduce((allUrl, elem) => {allUrl.push(elem.photo); //.replace("http://127.0.0.1:8000", ''));
        return allUrl;
        }, []);
    return urlArr
}


links.forEach(link => link.addEventListener('click', event => {
    const clickedEl = event.currentTarget;
    list.classList.add('hide');
    const sortedName = clickedEl.textContent.trim()

    fetch("/api/gallery/").then(response => response.json()).then(data => {
        galleryImg = sorted_api(data, sortedName)
        iter_img(galleryImg)
    }).catch(error=> {
        console.log(error)
    })
    innerTitle.textContent = sortedName;
    innerContainer.classList.remove('hide');
    }))


innerBtn.addEventListener('click', () => {
    list.classList.remove('hide');
    innerContainer.classList.add('hide');
    galleryImg = []
    iter_img(galleryImg)
})


function iter_img(galleryImg) {
    innerList.innerHTML = null
    galleryImg.map(img => {
        let idx = 0
        const li = `<img class="main__inner-img" id=${idx} src=${img} alt="">`;
        innerList.innerHTML += li;
        const innerImg = document.querySelectorAll('.main__inner-img');
        innerImg.forEach(img => img.setAttribute('id', idx++));

       return innerImg;
})}


// Modal
innerList.addEventListener('click', event => {
    if (event.target === event.currentTarget) {
    return
}
       modalImgRef.src = event.target.src;
        openModal(event)
    })


overlayRef.addEventListener('click', onOverlayClick)
const handleKeyDown = (event) => {
    if (event.code === 'Escape') {
        closeModal()
    }
}


let idN;
function openModal(event) {
        modalRef.classList.add('Modal');
    overlayRef.classList.add('showModal');
    window.addEventListener('keydown', handleKeyDown);
        idN = Number(event.target.id);
    if (idN === 0) {
    btnPrev.setAttribute("disabled", "disabled");
    }
    if (idN === galleryImg.length - 1) {
    btnNext.setAttribute("disabled", "disabled");
    }
    btnNext.addEventListener('click', onForward)
    btnPrev.addEventListener('click', onBackward)
}


function onForward() {
    btnPrev.removeAttribute("disabled", "disabled");
idN = idN + 1;
        setForward(idN);
}


function onBackward() {
    btnNext.removeAttribute("disabled", "disabled");
    idN = idN - 1;
    setForward(idN);
}


function setForward(id) {
    if (id === 0) {
            btnPrev.setAttribute("disabled", "disabled");
    } else if (id === galleryImg.length - 1) {
        btnNext.setAttribute("disabled", "disabled");
    }
    modalImgRef.src = galleryImg[id];
}


function closeModal() {
    modalRef.classList.remove('Modal');
        overlayRef.classList.remove('showModal');
        window.removeEventListener('keydown', handleKeyDown);
    btnNext.removeEventListener('click', onForward);
    btnPrev.removeEventListener('click', onForward);
    btnNext.removeAttribute("disabled", "disabled");
    btnPrev.removeAttribute("disabled", "disabled");
        modalImgRef.src = '';
    }


function onOverlayClick() {
    if (event.target === event.currentTarget) {
        closeModal()
    }
}