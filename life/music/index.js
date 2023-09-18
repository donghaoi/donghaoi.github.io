const tones = [
    new Audio('mu/1.G++.mp3'),
    new Audio('mu/2.F++.mp3'),
    new Audio('mu/3.E++.mp3'),
    new Audio('mu/4.D++.mp3'),
    new Audio('mu/5.C++.mp3'),
    new Audio('mu/6.B+.mp3'),
    new Audio('mu/7.A+.mp3'),
    new Audio('mu/8.G+.mp3'),
    new Audio('mu/9.F+.mp3'),
    new Audio('mu/10.E+.mp3'),
    new Audio('mu/11.D+.mp3'),
    new Audio('mu/12.C+.mp3'),
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