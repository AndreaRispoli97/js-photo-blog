console.log('Andrea');


const cardMarco = document.getElementById('cardMarco');

const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';



axios.get(endpoint)
    .then(response => {
        console.log(response.data);
        let elementCard = '';

        response.data.forEach(element => {

        const {title, date, url} = element;

        elementCard += `<div class="col mb-4 col-md-6 col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <div class="p-3"><img src=${url} class="card-img-top" alt="${title}"></div>
                        <img class="translate-middle start-50" src="img/pin.svg" style="position:absolute;" alt="pin">
                        <div class="card-body">
                            <p class="card-text">${date}</p>
                        </div>
                    </div>
                </div>`
            
        });

        cardMarco.innerHTML = elementCard;


    });