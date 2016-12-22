let car = [
    {
        'make': 'Jeep',
        'model': 'Cherokee',
        'size': 4,
        'cost': 30,
    },
    {
        'make': 'Volkswagon',
        'model': 'Bug',
        'size': 3,
        'cost': 15,
    },
    {
        'make': 'Vespa',
        'model': 'Ecima',
        'size': 2,
        'cost': 10,
    },
    {
        'make': 'Honda',
        'model': 'Odyssey',
        'size': 4,
        'cost': 20,
    },
]

window.addEventListener('load', function () {
    getLots();
    
    showVehicles();

});

//Post request

function updateCars(lotId, car) {
    //1. POST request to the server
    //2. send 'lotid', 'make', 'model', 'size', and 'rate' 
    //3. this section of code came about from our gathering @Lexie's computer,
    //reading the Mustache readme(Thanks Lexie) and a 3 hour study session with King
    // & Lexie
    let newCarParked = {
        lotId: lotId,
        make: car.make,
        model: car.model,
        size: car.size,
        rate: car.rate,
    }
    console.log(newCarParked)

    let request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:4567/parkcar');
    // request.addEventListener('load', function () {
    // });

    //need to serialize the data I send over
    request.send(JSON.stringify(newCarParked));

}


//Get Request
function getLots() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://still-coast-76678.herokuapp.com/lots');
    request.addEventListener('load', function () {

        let response = JSON.parse(request.responseText);
        //console.log(response);

        //Show each of the lots
        for (let i = 0; i < response.length; i++) {
            showLots(response[i]);
        }

    });
    request.send();
}

//show lots
function showLots(lots) {
    let parent = document.querySelector('#vehicleLots');
    let eachlot = document.createElement('li');

    // for (let i = 0; i < lots.length; i++) {
    eachlot.innerHTML = Mustache.render(
        document.querySelector('#lot-types').innerHTML,
        { capacity: lots.capacity, id: lots.id, rate: lots.rate }
    );

    parent.appendChild(eachlot);
    console.log(eachlot);
}

function showVehicles(cars) {

    let parent2 = document.querySelector('#listCars');

    for (let i = 1; i < car.length; i++) {
        let carList = document.createElement('li');
        carList.innerHTML = Mustache.render(
            document.querySelector('#vehicle-types').innerHTML,
            { make: car[i].make,
            model: car[i].model,
            size: car[i].size, 
            cost: car[i].cost,
            lots: [{mucholots: 1},
            {mucholots: 2},
            {mucholots: 3},
            {mucholots: 4},
            ]}
        );

        let lot1Button = carList.querySelector('#lot-1');
        lot1Button.addEventListener('click', function () {
            // updateCars has two parameters
            updateCars(1, cars[i]);
        });

        let lot2Button = carList.querySelector('#lot-2');
        lot2Button.addEventListener('click', function () {
            updateCars(2, cars[i]);
        });

        let lot3Button = carList.querySelector('#lot-3');
        lot3Button.addEventListener('click', function (){
            updateCars(3, cars[i]);
        });
        let lot4Button = carList.querySelector('#lot-4');
        lot4Button.addEventListener('click', function (){
            updateCars(4, cars[i]);
        });

        parent2.appendChild(carList);
        console.log(carList)
       
    }

}






