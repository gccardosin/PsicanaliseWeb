// DOM Document Object Model

/**Toggle Menu, abre e fecha o menu ao clicar no icone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

//adiciona o show ou tira quando necessario
for (const div of toggle) {
  div.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/**quando clicar em um item o menu fecha */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/**mudar o header da pagina quando scroll ¨Sombra¨ */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/**Testimonials slider */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },

  mousewhell: true,
  keyboard: true
})

/**ScrollReveal: mostrar elementos quando der scroll na pag */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 750,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  `,
  { interval: 100 }
)
