import Fact from "./Fact.js";
import {getOne} from "./api.js";
import {getList} from "./api.js";

const getOneFactBtn = document.querySelector('.get-one-fact-button');
const getFactsBtn = document.querySelector('.get-facts-button');

const showOneFact = async() => {
    const fact = await getOne();
    document.querySelector('.facts-container').innerHTML = '';
    new Fact(fact).render();
};

const showFacts = async() => {
    const facts = await getList();
    document.querySelector('.facts-container').innerHTML = '';
    facts.forEach(data => {
        new Fact(data.fact).render();
    });
}

getOneFactBtn.addEventListener('click', showOneFact);
getFactsBtn.addEventListener('click', showFacts);