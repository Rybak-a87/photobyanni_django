import Refs from './refs';
export default function openScrollSnap(src) {
    if (window.screen.width <= 768) {
        Refs.innerList.insertAdjacentHTML('afterbegin', `<div class="slider">
        <section>
           <img class="swiper-slide" src=${src[0]}>
        </section>
        <section>
           <img class="swiper-slide" src=${src[1]}>
        </section>
        <section>
           <img class="swiper-slide" src=${src[2]}>
        </section>
        <section>
           <img class="swiper-slide" src=${src[3]}>
        </section>
        <section>
           <img class="swiper-slide" src=${src[4]}>
        </section>
        <section>
           <img class="swiper-slide" src=${src[5]}>
        </section>
        <section>
          <img class="swiper-slide" src=${src[6]}>
        </section>
        <section>
          <img class="swiper-slide" src=${src[7]}>
        </section>
    </div>
    </div>`);
    }
}