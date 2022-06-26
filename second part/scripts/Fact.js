import { updateOne } from "./api.js";

class Fact {
    constructor (fact) {
        this.fact = fact;
        this.container = document.createElement("div");
        this.textContainer = document.createElement("p");
        this.wrapper = document.createElement("div");
        this.input = document.createElement("input");
        this.editButton = document.createElement("button");
    }

    createElement() {
        this.textContainer.innerText = this.fact;
        this.editButton.innerText = 'Edit';
        this.editButton.addEventListener('click', () => updateOne(this.textContainer, this.input));
        this.input.className = "input";
        this.wrapper.append(this.input, this.editButton);
        this.container.append(this.textContainer, this.wrapper);
    }

    render() {
        this.createElement();
        document.querySelector('.facts-container').append(this.container);
    }
};

export default Fact;