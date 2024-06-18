class SellItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.loadTemplate();
  }

  static get observedAttributes() {
    return [
      "template",
      "image",
      "title",
      "price",
      "discounted-price",
      "discount",
      "rating",
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.shadowRoot && oldValue !== newValue) {
      switch (name) {
        case "template":
          this.loadTemplate();
          break;
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
        case "discounted-price":
          this.shadowRoot.querySelector(
            ".discounted-price"
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
      }
    }
  }

  loadTemplate() {
    const templateName = this.getAttribute("template") || "default";
    const template = document.getElementById(
      `sell-item-template-${templateName}`
    );
    if (template) {
      this.shadowRoot.innerHTML = "";
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.updateAttributes();
    } else {
      console.warn(
        `Template with id "sell-item-template-${templateName}" not found.`
      );
    }
  }

  updateAttributes() {
    const attributes = [
      "image",
      "title",
      "price",
      "discounted-price",
      "discount",
      "rating",
    ];
    attributes.forEach((attr) => {
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
      if (i >= rating) {
        star.style.color = "#ddd";
      }
      ratingContainer.appendChild(star);
    }
  }
}

customElements.define("sell-item", SellItem);
