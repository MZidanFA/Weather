const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey = '185dbcc57e27f9315a49d3f1c762ebd7';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}')
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {

                container.style.height = '400px';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');

                return;
            }
        });
});
