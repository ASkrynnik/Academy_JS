const textArea = document.querySelector('.text-area');
const input = document.querySelector('.input');
const addBtn = document.querySelector('.add-btn');
const removeBtn = document.querySelector('.remove-btn');
const maxItems = 10;
let queue;

const initializeQueueValue = () => {
    if (localStorage.getItem('queue') !== '') {
        queue = localStorage.getItem('queue').split(',');
    } else {
        queue = [];
    }
};

initializeQueueValue();

const updateTextArea = () => {
    textArea.innerHTML = queue.map((e, index) => `<p>${index+1}. ${e}<p>`).join('');
};

updateTextArea();

const handleAddValueClick = () => {
    if (input.value === '') {
        alert('None-empty value expected');
    } else if (queue.length + 1 > maxItems) {
        alert('The queue is overflowing');
    } else {
        queue.push(input.value);
        input.value = '';
        updateTextArea();
        localStorage.setItem('queue', queue);
    }
};

const handleRemoveValueClick = () => {
    if (queue.length === 0) {
        alert('Nothing to remove');
    } else {
        queue.shift();
        updateTextArea();
        localStorage.setItem('queue', queue);
    }
};

addBtn.addEventListener('click', handleAddValueClick);
removeBtn.addEventListener('click', handleRemoveValueClick);
