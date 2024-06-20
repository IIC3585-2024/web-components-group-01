class SellItem extends HTMLElement {
  static properties = [
    "image",
    "title",
    "price",
    "discounted",
    "discount",
    "rating",
    "discountcolor",
  ];

  #style = `
    .sell-item {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      width: 18rem;
      height: 25rem;
      text-align: center;
      color: #000;
      font-family: Arial, sans-serif;
      transition: ease;
      transition-duration: 0.2s;
      background-color: #fff;
    }
    .sell-item:hover {
      scale: 1.05;
      cursor: pointer;
    }
    .sell-item img {
      width: 10rem;
      height: 10rem;
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
    .discounted {
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
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 12px 0;
      gap: 4px;
    }
  `;

  #template = `
    <style>
      ${this.#style}
    </style>
    <div class="sell-item">
      <img class="image" src="" alt="Product Image" />
      <div class="title"></div>
      <div class="price"></div>
      <div class="discounted"></div>
      <div class="discount"></div>
      <div class="rating"></div>
    </div>
  `;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = this.#template;
    shadow.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return this.properties;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.shadowRoot && oldValue !== newValue) {
      switch (name) {
        case "image":
          this.shadowRoot.querySelector(".image").src = newValue;
          break;
        case "title":
          this.shadowRoot.querySelector(".title").textContent = newValue;
          break;
        case "price":
          this.shadowRoot.querySelector(
            ".price"
          ).textContent = `Price: $${newValue}`;
          break;
        case "discounted":
          this.shadowRoot.querySelector(
            ".discounted"
          ).textContent = `Discounted Price: $${newValue}`;
          break;
        case "discount":
          this.shadowRoot.querySelector(
            ".discount"
          ).textContent = `${newValue}% OFF`;
          break;
        case "rating":
          this.renderStars(newValue);
          break;
        case "discountcolor":
          this.shadowRoot.querySelector(".discount").style.backgroundColor =
            newValue;
          this.shadowRoot.querySelector(".discounted").style.color = newValue;
          break;
      }
    }
  }

  updateAttributes() {
    this.properties.forEach((attr) => {
      const value = this.getAttribute(attr);
      if (value !== null) {
        this.attributeChangedCallback(attr, null, value);
      }
    });
  }

  renderStars(rating) {
    const ratingContainer = this.shadowRoot.querySelector(".rating");
    if (!ratingContainer) return;

    ratingContainer.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      const star = document.createElement("span");
      star.textContent = "★";
      star.classList.add("star");
      star.style.color = i >= rating ? "#ddd" : "gold";
      ratingContainer.appendChild(star);
    }
  }
}

customElements.define("sell-item", SellItem);
