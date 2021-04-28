import '../style.css';
import '../styles/normalize2.css';
import '../styles/helpers/visually-hidden.css';
import '../styles/header.css';
import '../styles/footer.css';

document.querySelector('.header').insertAdjacentHTML('beforeend', `<div class= "bg-image"></div>
    <header class="header container">
      <div class="header__container">
      <a href="https://yuriev-yuriy.github.io/photo-portfolio/index.html" class="logo">KELISSA SMITH
<span class="logo__descr">LIFESTYLE PHOTOGRAPHER</span></a>
<p class="header__description">I am a professional <span>specializing in lifestyle</span> photography.</p>
      </div>
      <ul class="header__list">
        <li class="header__list-item"><div class="header__list-container"><a class="link header__list-link" href="https://yuriev-yuriy.github.io/photo-portfolio/index.html">Gallery</a><a class="link header__list-link transparent" href="https://yuriev-yuriy.github.io/photo-portfolio/index.html">Gallery</a></div></li>
        <li class="header__list-item"><div class="header__list-container"><a class="link header__list-link" href="https://yuriev-yuriy.github.io/photo-portfolio/html/about.html">About me</a><a class="link header__list-link transparent" href="https://yuriev-yuriy.github.io/photo-portfolio/html/about.html">About me</a></div></li>
        <li class="header__list-item"><div class="header__list-container"><a class="link header__list-link" href="https://yuriev-yuriy.github.io/photo-portfolio/html/services.html">Services</a><a class="link header__list-link transparent" href="https://yuriev-yuriy.github.io/photo-portfolio/html/services.html">Services</a></div></li>
        <li class="header__list-item"><div class="header__list-container"><a class="link header__list-link" href="https://yuriev-yuriy.github.io/photo-portfolio/html/contacts.html">Contacts</a><a class="link header__list-link transparent" href="https://yuriev-yuriy.github.io/photo-portfolio/html/contacts.html">Contacts</a></div></li>
      </ul>
    </header>`);

document.querySelector('.footer').insertAdjacentHTML('beforeend', ` <div class="footer__dark-line"></div>
      <div class="container footer__container">
        
      <ul class="footer__list">
        <li class="footer__list-item"><a class="footer__list-link" href="#">
          <img class="footer__icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA8klEQVRYR2NkgIAJQOwPxApQPq2pB0ALFgBxIyPU8nxa24jDfLADPgAx/wA54AHIAf8HyHKwtaMOoHYILIQm6gtYohVrVFPLAR+BFjoAMTaLYW6hqQMMCVgOcgTNHDARaHgBETmJZg5A9z0oKuYTW6pSIw2AzEAGD4AceSJChGrlALoDSCrYaBECNHcAuo+JCW0FoKL72BSSEwLkOCABmjAx3EAvBywA2hw/kCGAM2eQEwLoHhl5uWA0BEZDYDQERkOA6iFAadeMkqL4IUhzAxDXE1Op41BDiQPAnVMQADkCVGcT3ZZDcgw5DngI1A+qohsAU+tHxj7V+mUAAAAASUVORK5CYII=">
          <p class="visually-hidden">facebook</p></a></li>
        <li class="footer__list-item"><a class="footer__list-link" href="#">
          <img class="footer__icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB9klEQVRYR+2X7U3DQAyG6QTABJQJgAkoEwATECYAJiCdADYgTAAbUCYANkgnACYAP+FOOh32xSlU/VNLVpSLP9577XOS0caP3Ioei47D/bIvrSRoRKejkPxi2RmN+B2AD9HNFQFoAfC1ouRd2jUALwPPoVm35HopulcoG7a1KJ2O7gefM82nD8CnOFWij4kzIAisNe65rDcGuJmsH+bPSgDmYnwi+qoEhIWbbH0adm6RQ6wHL4A3MZyIckQ1gdaX5AFgx1bmsE68Jw+AvuQxRnp8r2SRaVoSSvfeB4Ad74ads8u2wAKlic04C4xxPTV83AzEhqNmBDwytoUd749csMcvF61vXIPIClhLhmsl0YGsaY0Lmzu5fd8xxP5etFISaZRazaieAGJ6ANAX2woAramsOaDu3gsAO4vWtBGZgLDiqn008jCArTVkYmMxMeOpSQGM5YZ5AVuqeAGwU1jIhcCNaC2qNV7K0J8A4EwfWJNRC85g6v3S8jJAAgZM+lKyWGW9Er0rGcRnQwBYxzHPQy8w8826pw5DALTiyJguyaDkBBoCAPvS+35w8kUAwAKnIW9GJh01d9G+aAmiH0cLJgDD27AWnXgaTrMZWoJF85h+awAwQEOt6tdsDgCaSPuw+Pd6KwG7n1MEEJXory+WJaHgw6Uh7zci4XfG4tqo6AAAAABJRU5ErkJggg==">
          <p class="visually-hidden">vimeo</p></a></li>
        <li class="footer__list-item"><a class="footer__list-link" href="#">
          <img class="footer__icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABkUlEQVRYR+1X7U3DMBClE8AGwATABJQJYAO6ATABdAJgAsIEsEHLBLQT4G7ABvBeOEsmOvtsp1X+5KRTmsa+9+7TyWTvT56gl9Ajud/1xQGggc4nAn6za8SI/ZbAN3R/IAKOBH4GAm9hRwJjBHIisJFWXeK6koLlvLiC3kIP+xSxReBOwFMYJPFYSyJF4CzwOGX/FA8X0IMaEjECXc8Z7nsowShMxRzq+oDH5gBzzhx74TkRG9WcopbndJKiDjwtAqH3U/GwJrp+TzGBMPfvsMJTMpSPBBtGzneFB+4u/xcJLQLhRi1sMcMEmkFfBHEQAizWt47LW0/Bg5KSpfzHZ+yWUIoJlBbhBdA8gQa/r0sqVqsBBwPHgZFUG75K3rmc7fgl12wOJYOI4T0Ry2tcSYwee9HCbxLZxigmCCfkp4mmLLAOIx40z4ZhVj5bz5qIqhmLADc5CTcHUHgcn+N+Bp3WeO735BDoY9/cOxIYI8AIDPlptiGBqglmlnfegvbjlEIS7Oler9h5mO0qvvY1xP0FYXhfxlfpoUsAAAAASUVORK5CYII=">
          <p class="visually-hidden">google+</p></a></li>
        <li class="footer__list-item"><a class="footer__list-link" href="#">
          <img class="footer__icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACv0lEQVRYR8WWi1EUQRCGuQiECFwiACLwiECJgDUCNALPCJQIWCIQImCJAIjANQI1A//vavqqbXp2FwrquqqL25l+/P0cFjtbpsWW/e88FcCuAL8XHxb2+O/1AV+L/8wNbC4AHH4Rf5hp+EpyXwugUZUpAET8TdzOdBzFOh18HsvIGIBGij+SVD8VC2U5EQ+ZYg0Azu/EZOAliJ44ykBkAHB6MxL5X931pb5Eh3F6BND0yNsKYmSPYzkyAJ2EThMjOP4k5n6Mlrr8Lj5IhC511vrzCIBISH2kBx1g2I8XEVu0v/R7cEpkEaCMbKR9LxsBMD5RCeMAM+ekmckAgKdeH3Q8qYYAwVnMBHtiM84eAAq/E8TUDUNQJ87K49XoeAKBahnd0906IA+g1fdFAEDqMQKBmrGE6AcibcSx6TBMmi1jWVY/6r6LADiI0ZFSGgoaijOcLwsAzgES0+z1Wt3HwM51RkP/l4Fe3++KM/tj6fepZMWunBy/WdOefJ0By1h7ui1BzAbgjfiewGiW4o2D4uhVAQxyEvvgxTLga0lTvRH7s1qX+zJRa8Z2sgSdJGIT0mDscGglptbeuJ0F+2sd2weZ3bQJWynFbsWwzbX1ge+BXvexcX39a7slHcNGxn7GUPRN6lEg3WRgs0RcVkwtrmxG+CyxmS4i5LKO9vp+Mdk5NSY7ZIN02wKqZbS6ijFoaU5Ar482tXNOM9ms8Uxu9DFCiChq+97veZqMkiFP3SkR40jkBJLR5HOMUu0V487QN8V5LVPZefakV/8tJ5pezNwb8QYADiLKbGJqgNDF5hAFsv+ITAaFTmwPjR+vqWb1foicl/SRc4TGAHBPxCsxo2QAGv3OxjWLnprTkDYZj2SmAJjCshgikjnRM2oAt22YgVufzQXgDbT6ABCZ8IQzGIDViCOS5wCoRvOci60D+AcfKqwhupge3QAAAABJRU5ErkJggg==">
          <p class="visually-hidden">dribbble</p></a></li>
        <li class="footer__list-item"><a class="footer__list-link" href="#">
          <img class="footer__icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABIklEQVRYR+2X4Q2CMBCFZQJ1AnUS2cARxAkcQdzADWQENxA30AnEDdxA38MjqViaJrTUH73kUhTS9/F6PSAZfeKAXCHn8tv3UEGgQO4TEd/6VuyYvwZ4IseBACoCvAKJ17IRwMaBC5zKZJlYuUuXS2YDsIAgtw2D2/Q+NMBUdkowgBLKG7nrI8Z0aAdc6v3MZVMDwQEIqUbTuHT/33BhjjxJwWYYd6Y7sHHAFuAq9cHWrgYhWDvacAkwgUJbvBEtcLDWEbgEMDmd4uTZNwBFGqu5bcuWoPah59KBCoIzEeUxO6ga3gHaAl3F+0Xl0oEIEB2IDnhzwNRie5+z6QO9RUwT/AVAyE+zBx3Ikca3Fo9rUH+cMgiRKU8zj5r11A9kQd03U3FcxilyxtgAAAAASUVORK5CYII=">
          <p class="visually-hidden">linkedin</p></a></li>
        <li class="footer__list-item"><a class="footer__list-link" href="#">
          <img class="footer__icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABH0lEQVRYR+1XgQ2CMBCUCXQD3UDdwA10A9lAnUDYQDfACRxB3cARYAOdQO/wSQihWBpKNWmTD4E2f8f12n6DwacdEEvERN5tP1IAJIg4EPCNbURF/pzAAzF0RCAlgZcj8Bz2bwmcQD4sKWesoqkCOzFvwaFXAk9ZrjSvEwIxUKOKcXtT4Ajgbc2qsU6ApuNueW+xZLVI6ZqQ49o2T6BTBcry102HFljdHOp6wBPwCngFfl6BBAzXJZY8sq8IVtqNzWQfmCsOpRm+jwSN4AvExQaBajmmwrBGgIARgoVJU1uh82xDgSInawPWCDdEKh85DVORP/wGzn4TD+jk1R7zEwRcXs0yKkBD7bU163ZgfjktXE3TjLvNr8yWoSfhz78BK31NxkvPHbcAAAAASUVORK5CYII=">
          <p class="visually-hidden">tumblr</p></a></li>
      </ul>
      <p class="footer__descr">©  2020 . <a class="footer__descr-link" href="https://www.linkedin.com/in/yuriy-yuriev-0617001b6">Looking for a job</a></p>
      </div>`);


      // <object type="image/svg+xml" data="./images/icons/facebook.svg" class="footer__svg"></object>
      //     <svg class="footer__icon">
      //       <use href="./images/icons/sprite.svg#icon-facebook"></use>
      //     </svg>