import { LitElement, html } from '@polymer/lit-element';

class MyElement extends LitElement {
  static get is() {
    return 'my-element';
  }

  render() {
    return html`This is a sample element!`;
  }
}

window.customElements.define(MyElement.is, MyElement);
