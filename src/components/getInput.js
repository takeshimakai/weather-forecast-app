const getInput = (inputId) => {
    const { value } = document.querySelector(inputId);
    return value;
};

export default getInput;
