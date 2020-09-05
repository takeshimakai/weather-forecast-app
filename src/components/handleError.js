const handleError = (error) => {
    document.body.innerHTML = '';
    
    const errorMsg = document.createElement('p');
    errorMsg.textContent = `${error}. Please refresh page.`;

    document.body.appendChild(errorMsg);
};

export default handleError;
