// let parent = document.querySelector('#vehicleLots');

let car = [
    {
        make: 'Jeep',
        model: 'Cherokee',
        size: 4,
        cost: 150,
    },
    {
        make: 'Volkswagon',
        model: 'Bug',
        size: 3,
        cost: 55,
    },
    {
        make: 'Vespa',
        model: 'Ecima',
        size: 2,
        cost: 75,
    },
    {
        make: 'Honda',
        model: 'Odyssey',
        size: 4,
        cost: 100,
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
        cost: car.cost,
    }
    console.log(newCarParked)

    let request = new XMLHttpRequest();
    request.open('POST', 'https://still-coast-76678.herokuapp.com/parkCar');
    
    request.addEventListener('load', function () {
        console.log('it is posted');
        getLots();
        // parent.innerHTML = '';
        // showLots();

    });
    
    

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
        let parent = document.querySelector('#vehicleLots');//deleting everything and then sends the new information back
        parent.innerHTML = '';
        for (let i = 0; i < response.length; i++) {
            showLots(response[i]);
        }
        // eachlot.innerHTML = Mustache.render(
        // document.querySelector('#lot-types').innerHTML,
        // need a loop for the capacity refresh
    });
    request.send();
}

//show lots
function showLots(lots) {
    let parent = document.querySelector('#vehicleLots');
    // parent.innerHTML = '';
    let eachlot = document.createElement('li');
    // let vehicle = lots.vehicle
    // vehicle = vehicle.make + vehicle.model

    // for (let i = 0; i < lots.length; i++) {
    eachlot.innerHTML = Mustache.render(
        document.querySelector('#lot-types').innerHTML,
        { capacity: lots.capacity, id: lots.id, rate: lots.rate, vehicle: lots.vehicle[0].make + ' ' + lots.vehicle[0].model}
    );
    //I need a for loop to allow for adding vehicles.  King helped me figure out how to show vehicle names versus [object]
console.log(lots.vehicle[0].make)
    parent.appendChild(eachlot);
    console.log(eachlot);


}

function showVehicles(cars) {

    let parent2 = document.querySelector('#listCars');

    for (let i = 0; i < car.length; i++) {
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
            updateCars(1, car[i]);
        });

        let lot2Button = carList.querySelector('#lot-2');
        lot2Button.addEventListener('click', function () {
            updateCars(2, car[i]);
        });

        let lot3Button = carList.querySelector('#lot-3');
        lot3Button.addEventListener('click', function (){
            updateCars(3, car[i]);
        });
        let lot4Button = carList.querySelector('#lot-4');
        lot4Button.addEventListener('click', function (){
            updateCars(4, car[i]);
        });

        parent2.appendChild(carList);
        console.log(carList)
       
    }

}






