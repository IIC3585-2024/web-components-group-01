import { LitElement, css, html } from "lit";

class SellItem extends LitElement {
  static get properties() {
    return {
      image: { type: String },
      title: { type: String },
      price: { type: String },
      discountedPrice: { type: String },
      discount: { type: String },
      rating: { type: Number },
      backgroundColor: { type: String },
      textColor: { type: String },
      discountColor: { type: String },
    };
  }

  constructor() {
    super();
    this.backgroundColor = "#fff";
    this.textColor = "#000";
    this.discountColor = "#e74c3c";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .sell-item {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        max-width: 300px;
        text-align: center;
        font-family: Arial, sans-serif;
        background-color: var(--background-color, #fff);
        color: var(--text-color, #000);
      }
      .sell-item img {
        max-width: 100%;
        border-radius: 8px;
      }
      .title {
        font-size: 18px;
        margin: 12px 0;
      }
      .price {
        font-size: 16px;
        color: #888;
        text-decoration: line-through;
      }
      .discounted-price {
        font-size: 20px;
        color: var(--discounted-price-color, #e74c3c);
      }
      .discount {
        background-color: var(--discount-color, #e74c3c);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        display: inline-block;
        margin: 8px 0;
      }
      .rating {
        margin: 12px 0;
      }
      .star {
        color: gold;
      }
    `;
  }

  render() {
    return html`
      <style>
        :host {
          --background-color: ${this.backgroundColor};
          --text-color: ${this.textColor};
          --discount-color: ${this.discountColor};
        }
      </style>
      <div class="sell-item">
        <img class="image" src="${this.image}" alt="Product Image" />
        <div class="title">${this.title}</div>
        <div class="price">Price: $${this.price}</div>
        <div class="discounted-price">
          Discounted Price: $${this.discountedPrice}
        </div>
        <div class="discount">${this.discount}% OFF</div>
        <div class="rating">
          ${[...Array(5)].map(
            (_, i) => html`
              <span
                class="star"
                style="color: ${i < this.rating ? "gold" : "#ddd"};"
                >★</span
              >
            `
          )}
        </div>
      </div>
    `;
  }
}

customElements.define("sell-item", SellItem);
