import { LitElement, TemplateResult, html, css, CSSResult } from 'lit';
import { customElement, property } from 'lit/decorators';

@customElement('lit-element-component')
export default class LitElementComponent extends LitElement {
  public static styles: CSSResult = css`
    span {
      color: green;
    }
  `;

  @property({ type: String })
  public prop1: string | null = null;

  public render(): TemplateResult {
    return html` Some text <span>${this.prop1}</span>! `;
  }
}

