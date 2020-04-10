const closed = `
  <svg height="1rem" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
  </svg>
`

const open = `
  <svg height="1rem" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"></path>
  </svg>
`

export default class PasswordToggle extends window.HTMLInputElement {
  constructor () {
    super()

    this.display = this.getAttribute('type') !== 'password'
    this.toggleButton = this.createButton(this)
  }

  connectedCallback () {
    this.insertAdjacentElement('afterend', this.toggleButton)
  }

  createButton (el) {
    const button = document.createElement('button')

    button.style.background = 'transparent'
    button.style.border = '0'
    button.style.cursor = 'pointer'
    button.style.verticalAlign = 'middle'
    button.style.color = 'inherit'

    button.addEventListener('click', this.toggle.bind(el))
    button.innerHTML = closed

    return button
  }

  toggle () {
    this.display = !this.display
    this.toggleButton.innerHTML = this.display ? closed : open

    this.setAttribute('type', this.type)
  }

  get type () {
    if (this.display) {
      return 'text'
    }

    return 'password'
  }
}

window.customElements.define('password-toggle', PasswordToggle, { extends: 'input' })
