// --- Smooth scroll

let isPlay = false

const menuLink = document.querySelectorAll('.menu-link')
const video = document.getElementById('videos')
const videoButton = document.querySelector('.video-content__items-btn')
const sections = document.querySelectorAll('.section')
const modal = document.querySelector('.modal')
const registerBtn = document.querySelector('.header-btn')
const closeBtn = document.querySelector('.modal-close')
const overlay = document.querySelector('.overlay')

const scrollToSection = e => {
  e.preventDefault()
  const href = e.currentTarget.getAttribute('href')

  if (!href && !href.startsWith('#')) return

  const section = href.slice(1)
  const top = document.getElementById(section)?.offsetTop || 0
  window.scrollTo({ top, behavior: 'smooth' })
}
menuLink.forEach(link => link.addEventListener('click', scrollToSection))

// --- Scroll nav

window.onscroll = function showNav() {
  let nav = document.querySelector('.nav')

  if (window.pageYOffset > 200) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

const classes = {
  opened: 'opened',
  hidden: 'hidden',
}

const links = document.querySelector('.nav-content__links')
const navBtn = document.querySelector('.nav-btn')

const toggleNav = () => {
  links.classList.toggle(classes.opened)
}

navBtn.addEventListener('click', toggleNav)

// --- Video

const handleVideo = ({ target }) => {
  isPlay = !isPlay
  videoButton.classList.toggle('hidden')
  isPlay ? video.play() : video.pause()
}

videoButton.addEventListener('click', handleVideo)

// sectionAnimation

const handleScroll = () => {
  const { scrollY: y, innerHeight: h } = window
  sections.forEach(sec => {
    if (y > sec.offsetTop - h / 1.2) sec.classList.remove(classes.hidden)
  })
}

window.addEventListener('scroll', handleScroll)

// registr btn
const openModal = () => {
  modal.classList.add('opened')
  overlay.classList.add('opened')
}

const closeModal = () => {
  modal.classList.remove('opened')
  overlay.classList.remove('opened')
}

registerBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
