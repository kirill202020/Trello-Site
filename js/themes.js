const body = document.querySelector('body'),
      light = document.querySelector('.theme-light'),
      dark = document.querySelector('.theme-dark'),
      blue = document.querySelector('.theme-blue'),
      settingsModal = document.querySelector('.settings-modal')


function openSettings() {
    settingsModal.style.display = 'flex'
}

function closeSettings() {
    settingsModal.style.display = 'none'
}


light.addEventListener('click', () => {
    body.classList = ''
    body.classList.add('light')
})
dark.addEventListener('click', () => {
    body.classList = ''
    body.classList.add('dark')
})
blue.addEventListener('click', () => {
    body.classList = ''
    body.classList.add('blue')
})


