import { LitElement, css, html } from "lit";
class SellItem extends LitElement {
  static get properties() {
    return {
      image: { type: String },
      title: { type: String },
      price: { type: String },
      discounted: { type: String },
      discount: { type: String },
      rating: { type: Number },
      background: { type: String },
      text: { type: String },
      discountcolor: { type: String },
    };
  }

  static get styles() {
    return css`
      .sell-item {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        width: 300px;
        height: 550px;
        text-align: center;
        font-family: Arial, sans-serif;
        transition: ease;
        transition-duration: 0.2s;
      }
      .sell-item:hover {
        scale: 1.05;
        cursor: pointer;
      }
      .sell-item img {
        width: 300px;
        height: 300px;
        object-fit: cover;
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
        color: #e74c3c;
      }
      .discount {
        background-color: #e74c3c;
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

  constructor() {
    super();
    this.background = "#fff";
    this.text = "#000";
    this.discountcolor = "#e74c3c";
  }

  render() {
    return html`
      <div
        class="sell-item"
        style="background-color: ${this.background}; color: ${this.text};"
      >
        <img class="image" src="${this.image}" alt="Product Image" />
        <div class="title">${this.title}</div>
        <div class="price">Price: $${this.price}</div>
        <div class="discounted-price" style="color: ${this.discountcolor};">
          Discounted Price: $${this.discounted}
        </div>
        <div class="discount" style="background-color: ${this.discountcolor};">
          ${this.discount}% OFF
        </div>
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
