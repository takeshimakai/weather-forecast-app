import fetchData from './fetchData';

const loadBackground = async (location) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${location}&api_key=Mt4nTlonthoBKxLA5ZFtxJ6ePcpw4b2E&limit=5`;
    const fetchedData = await fetchData(url);

    const randomIndex = Math.floor(Math.random() * 5);

    const img = document.createElement('img');
    img.setAttribute('id', 'bg-img');
    img.src = fetchedData.data[randomIndex].images.original.url;

    document.body.appendChild(img);
};

export default loadBackground;
