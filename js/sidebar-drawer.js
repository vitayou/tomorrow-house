const drawerMenutButtonList = document.querySelectorAll(
  '.sidebar-nav .drawer-menu-button'
)

function toggleDrawerMenu() {
  // drawerMenutButton을 감싸고 있는 drawer-menu한테 is-open 토글
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
}

drawerMenutButtonList.forEach(function (button) {
  button.addEventListener('click', toggleDrawerMenu)
})
