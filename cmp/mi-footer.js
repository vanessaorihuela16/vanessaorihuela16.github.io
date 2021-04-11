class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Vanessa Orihuela Santillan.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
