import deleteIcon from '../assets/delete.svg'
import addIcon from '../assets/add.svg'
import completeIcon from '../assets/complete.svg'

class TodoList extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const addedItems = [this.getAttribute('item1'), this.getAttribute('item2'), this.getAttribute('item3')].filter(Boolean);
        this.items = addedItems.map(item => ({ text: item, completed: false }));
        this.shadow.innerHTML = `
        <style>
            :host {
                display: block;
                font-family: sans-serif;
                text-align: center;
                background-color: #d5d5d5;
                padding: 0.5rem;
                margin: 0.25rem;
                color: #000000;
                border-radius: 5px;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
                border: 2px solid #505050;
                border-top-color: #ffffff;
                border-left-color: #ffffff;
            }
            h2 {
                margin: 0;
                border-bottom-width: 2px;
                border-bottom-style: solid;
                border-image: linear-gradient(90deg, #d5d5d5, #9a9a9a, #d5d5d5) 1;
                user-select: none;
            }
            ul {
                list-style-type: none;
                padding: 0;
                gap: 5px;
            }
            li {
                display: flex;
                justify-content: space-between;
                padding: 0.5rem;
                border: 2px solid #505050;
                border-top-color: #ffffff;
                border-left-color: #ffffff;
                border-radius: 4px;
            }
            li.complete {
                background-color: #82b979;
            }
            li:hover {
                background-color: #f9f9f9;
            }
            li.complete:hover {
                background-color: #b4d8ae;
            }
            .add-item-bar {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
                margin: 0.5rem 0;
                padding: 0.15rem;
            }
            label {
                user-select: none;
            }
            input {
                padding: 0.5rem;
                border: 1px solid #ddd;
                border-radius: 4px;
                background-color: #f9f9f9;
                color: #000000;
            }
            button {
                border: none;
                width: 2rem;
                height: 2rem;
                cursor: pointer;
                background-color: transparent;
                padding: 0.25rem;
            }
            button img {
                width: 1.5rem;
                transition: filter 0.4s;
                height: max-content;
            }
            button.add img:hover {
                filter: invert(33%) sepia(95%) saturate(2024%) hue-rotate(175deg) brightness(108%) contrast(108%);
            }
            button.complete img:hover {
                filter: invert(54%) sepia(92%) saturate(2624%) hue-rotate(83deg) brightness(105%) contrast(123%);
            }
            button.delete img:hover {
                filter: invert(17%) sepia(99%) saturate(7405%) hue-rotate(6deg) brightness(108%) contrast(117%);
            }
        </style>
        <div id='todo'>
            <h2>${this.title}</h2>
            <ul id='todo-list'></ul>
        </div>
        `;
        const input = document.createElement('div');
        input.className = 'add-item-bar';
        input.innerHTML = `
          <label>${this.getAttribute('prompt')}
            <input id="new-item-input" type="text" @keypress=${this._handleKeyPress} />
          </label>
          <button class="item-button add" @click=${this._addItem}>
            <img src=${addIcon} alt="Add"/>
          </button>
        `

        const todo = this.shadowRoot.getElementById('todo');
        todo.appendChild(input);

        this._render();
    }

    _render(){

        const list = this.shadowRoot.getElementById('todo-list');
        list.innerHTML = ``;

        this.items.forEach((item, i) => {
        const li = document.createElement('li');
        li.className = item.completed ? 'complete' : '';
        li.innerHTML = `
            ${item.text}
            <div class="item-buttons">
            <button class="item-button complete">
                <img src=${completeIcon} alt="Mark as completed" />
            </button>
            <button class="item-button delete">
                <img src=${deleteIcon} alt="Delete" />
            </button>
            </div>
        `;
        list.appendChild(li);

        li.querySelector('.item-button.complete').addEventListener('click', () => this._completeItem(i));
        li.querySelector('.item-button.delete').addEventListener('click', () => this._removeItem(i));
        });

        this.shadow.querySelector('.item-button.add').addEventListener('click', () => this._addItem());
        this.shadow.getElementById('new-item-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            this._addItem();
        }
        });
    }

    _addItem() {
        const input = this.shadowRoot.getElementById('new-item-input');
        const text = input.value.trim();
        if (text) {
          this.items.push({ text, completed: false });
          input.value = '';
          this._render();
        }
    }

    _completeItem(index) {
        this.items[index].completed = !this.items[index].completed;
        this._render();
    }

    _removeItem(index) {
        this.items.splice(index, 1);
        this._render();
    }

}

customElements.define('todo-list', TodoList);
