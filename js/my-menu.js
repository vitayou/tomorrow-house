const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')

function closeMymenuOnClickingOutside(e) {
  // 1. 내가 클릭한 요소가 무엇이지? => e.target
  // 2. myMenu가 요소를 포함하고 있는지를 알 수 있는 방법 => contains!
  // => myMenu가 e.target을 포함하고 있지 않은 경우 -> myMenu에 is-actvie를 제거
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMymenuOnClickingOutside)
  }
}

function toggleMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    // 앞으로 내가 활성화를 시키겠다.
    window.addEventListener('click', closeMymenuOnClickingOutside)
  }
  myMenu.classList.toggle('is-active')
}

myMenuButton.addEventListener('click', toggleMyMenu)
