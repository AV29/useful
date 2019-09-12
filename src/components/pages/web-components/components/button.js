import { isChrome, isFirefox } from '../../../../utilities/browserDefine';

const buttonTemplate = document.createElement('template');

buttonTemplate.innerHTML = `
  <style>
    .container {
      padding: 8px;
    }
    button {
      display: block;
      overflow: hidden;
      position: relative;
      padding: 0 16px;
      font-size: 16px;
      font-weight: bold;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      width: 100%;
      height: 40px;
      box-sizing: border-box;
      border: 1px solid #a1a1a1;
      background: #ffffff;
      box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.05), 0 2px 8px 0 rgba(161,161,161, 0.4);
      color: #363636;
      cursor: pointer;
    }
  </style>
  <div class="container">
    <button></button>
  </div>
`;

class Button extends HTMLElement {
  constructor () {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(buttonTemplate.content.cloneNode(true));

    this.$button = this._shadowRoot.querySelector('button');
    this.$container = this._shadowRoot.querySelector('.container');
    this.$button.addEventListener('click', (event) => {
      this.dispatchEvent(
        new CustomEvent('onClick', {
          detail: 'Hello from within the Custom Element',
        })
      );
    });
  }

  connectedCallback () {
    if (this.hasAttribute('as-atom')) {
      this.$container.style.padding = '0px';
    }
  }

  static get observedAttributes () {
    return ['label'];
  }

  get label () {
    return this.getAttribute('label');
  }

  set label (value) {
    this.setAttribute('label', value);
  }

  attributeChangedCallback (name, oldVal, newVal) {
    this.render();
  }

  render () {
    this.$button.innerHTML = this.label;
  }
}

(isChrome || isFirefox) && window.customElements && window.customElements.define('anton-button', Button);
