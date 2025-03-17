// Non ci fidiamo di noi stessi quindi testiamo
console.log('Andrea');

// Vado a prendere l'id di dove vogliamo "appendere" le card quindi nel contenitore con la classe row
const cardMarco = document.getElementById('cardMarco');
// Andiamo a semplificare il codice salvando l'API in una variabile
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';


const overlayElement = document.getElementById('overlay');
console.log(overlayElement);
const btn1 = document.getElementById('btn');
console.log(btn1);
const imgChange = document.getElementById('img-Change');

// Usiamo axios cosi da semplificare il codice il più possibile
axios.get(endpoint)
    .then(response => {
        // Test fiducia passato
        console.log(response.data);
        //Creiamo una stringa dove andremo ad "inserire" le card richieste
        let elementCard = '';

        //Creiamo un ciclo con forEach per andare a iterare il contenuto di "endpoint"
        response.data.forEach(element => {
        //Destrutturiziamo gli elementi che ci servono (elementi che ci servono|contenitore che li conteneva)
        const {title, date, url} = element;
        //Andiamo a creare le card da inserire
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
        //Andiamo ad inserire le card(elementCard) nell'HTML
        //Precisamente nel contenitore che ha come id cardMarco
        cardMarco.innerHTML = elementCard;

        const card = document.querySelectorAll('.card');

        console.log(card);

        for (let i = 0; i < card.length; i++) {
          console.log('sono nel ciclo');  
        
          card[i].addEventListener('click', function(){
                console.log(`ho cliccato sulla scheda ${i}`); 
                const schedaCurrent = card[i].querySelector('.card-img-top');
                imgChange.src = schedaCurrent.src
                overlayElement.classList.add('d-block');
            overlayElement.classList.remove('d-none');
            });

        };
        
        

        
        // btn1.innerHTML = elementProva;



        btn1.addEventListener('click', function () {  
            overlayElement.classList.remove('d-block');
            overlayElement.classList.add('d-none');
        });


    })
    .catch( error => {
        console.error('Error, Bocciat');
    });
    