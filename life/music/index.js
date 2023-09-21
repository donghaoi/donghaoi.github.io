const tones = [
  new Audio('mu/1.G++.MP3'),
  new Audio('mu/2.F++.MP3'),
  new Audio('mu/3.E++.MP3'),
  new Audio('mu/4.D++.MP3'),
  new Audio('mu/5.C++.MP3'),
  new Audio('mu/6.B+.MP3'),
  new Audio('mu/7.A+.MP3'),
  new Audio('mu/8.G+.MP3'),
  new Audio('mu/9.F+.MP3'),
  new Audio('mu/10.E+.MP3'),
  new Audio('mu/11.D+.MP3'),
  new Audio('mu/12.C+.MP3'),
]
const makeSound = (index) => {
  const target = document.querySelector(`.key:nth-child(${index+1})`)
  new Audio(tones[index].src).play()
  target.classList.add('playing')
  setTimeout(() => {
    target.classList.remove('playing')
  },300)
}

const onkeydown =  (e) => {
  if(['1','2','3','4','5','6','7','8','9','0','-','='].includes(e.key)){
    const targetIndex = ['1','2','3','4','5','6','7','8','9','0','-','='].indexOf(e.key)
    makeSound(targetIndex)
  }
}
document.body.addEventListener('click', (e) => {
  if(e.target.classList.contains('key')){
    makeSound(Array.from(
      e.target.parentElement.children
    ).indexOf(e.target))
  }
})
for (let windowItr = window; windowItr.parent !== windowItr ; windowItr = windowItr.parent) {
  windowItr.document.body.addEventListener('keydown', onkeydown)
}
window.top.document.body.addEventListener('keydown', onkeydown)