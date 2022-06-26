const handleError = e => {
    console.log(e);
}

export const getOne = async() => {
    try {
        const {fact} = await fetch("https://catfact.ninja/fact").then(response => response.json());
        return fact;
    } catch (e) {
        handleError(e);
    }
};

export const getList = async() => {
    try {
        const {data: facts} = await fetch("https://catfact.ninja/facts").then(response => response.json());
        return facts;
    } catch (e) {
        handleError(e);
    }
};

export const updateOne = async(textContainer, input) => {
    try {
        setTimeout(() => {
            textContainer.innerText = input.value;
        }, 500);
    } catch (e) {
        handleError(e);
    }
};