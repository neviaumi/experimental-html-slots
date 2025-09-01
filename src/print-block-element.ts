import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("wc-print-block")
export class PrintBlockElement extends LitElement {
  static override styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    ::slotted([slot="content"]) {
      font-family: var(--wa-font-family-body);
    }
    ::slotted(:not([slot])) {
      background: var(--wa-color-brand-40);
      color: white;
      font-family: var(--wa-font-family-body);
    }
  `;

  override render() {
    return html`
      <slot name="title">Default Title</slot>
      <div>Middle</div>
      <slot name="content">Default Content</slot>
      <slot>Default</slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-print-block": PrintBlockElement;
  }
}
