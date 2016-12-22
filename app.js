let car = [
    {'make': 'Jeep',
    'model': 'Cherokee',
    'size': 4,
    'funds': 30,
    },
    {'make': 'Volkswagon',
    'model': 'Bug',
    'size': 3,
    'funds': 15,
    },
    {'make': 'Vespa',
    'model': 'Ecima',
    'size': 2,
    'funds': 10,
    },
    {'make': 'Honda',
    'model': 'Odyssey',
    'size': 4,
    'funds': 20,
    },
]

let lot = [
    {'id': 1,
    'capacity': 15,
    'cost': 5 
    },
    {'id': 2,
    'capacity': 15,
    'cost': 5 
    },
    {'id': 3,
    'capacity': 15,
    'cost': 5 
    },
    {'id': 4,
    'capacity': 15,
    'cost': 5
    },
]

window.addEventListener('load', function () {

    //1. POST request to the server
    //2. send 'make', 'model', 'size' and 'funds' 
   function createvehicleInfo() {
    let vehicleType = {
        make: document.querySelector('#make').value,
        model: document.querySElector('#model').value,
        size: 0,
        cost: document.querySelector('#cost').value,
        id: document.querySelector()
    };

    let request = new XMLHttpRequest();
    request.open('POST', 'https://still-coast-76678.herokuapp.com/lots');
    request.addEventListener('load', function () {
        console.log('new car exists!!!!!');
    });
    //need to serialize the data I send over
    request.send(JSON.stringify(vehicleType));
}

    //This is getting the lots information from the backend.
    
    function getLots() {
        let request = new XMLHttpRequest ();
        request.open('GET', 'https://still-coast-76678.herokuapp.com/lots'); 
        request.addEventListener('load', function () { 
        request.responseText; 
            let response = JSON.parse(request.responseText); 
            console.log(response); 

            //Show each of the lots
            for (let i = 0; i < response.length; i++) {
            showLots(response[i]);
        }
        showLots();
    }); 
    request.send(); 
    }

    //Display Vehicles
function showLots(lots) {
//     let newLot = document.createElement('li');
//     newLot.textContent = lots.id;

//     //create my (capacity)
//     let lotsCapacity = document.createElement('h3');
//     lotsCapacity.textContent = lots.capacity;
//     newLot.appendChild(lots.capacity);

//     //create my cost
//     let lotsCost = document.createElement('p');
//     lotsCost.textContent = lots.cost;
//     newLot.appendChild(lots.cost);

//     //get the parent (where we want to append)
//     let parent4 = document.querySelector('#Sales'); //this is the ul
//     parent4.appendChild(newLot);
// }


    
//  //This is my Moustache WHERE DO I PUT THIS???  
    let parent = document.querySelector('#vehicleLots');
    // let lot = ['Lot 1', 'Lot 2', 'Lot 3', 'Lot 4'];
    let vehicle = document.createElement('li');

    for (let i = 0; i < lot.length; i++) {
        vehicle.innerHTML = Mustache.render(
            document.querySelector('#lot-types').innerHTML,
            {lotName: lot[i].id}
        )}
        
        parent.appendChild(vehicle);
        console.log(vehicle);

    
function showVehicles(cars) {

    let parent2 = document.querySelector('#listCars');
    // let car = ['Jeep', 'VW Bug', 'Vespa', 'Honda Accord'];
    let carList = document.createElement('li');

    for (let i = 0; i < car.length; i++) {
        carList.innerHTML = Mustache.render(
            document.querySelector('#vehicle-types').innerHTML,
            {vehicleName: car[i]}
        )}
        
        parent2.appendChild(vehicle);
        console.log(car);
});

}



    




// let parent = document.querySelector('#vehicleLots');
//     for (let i = 0; i < lot-types.length; i++) {

//     let lots = [ 'Lot 1', 'Lot 2', 'Lot 3', 'Lot 4'];

//     let lotItems = document.createElement('li');
    
//     lotItems.innerHTML = Mustache.render(
//         document.querySelector('#lot-types').innerHTML,
//         {lotName: lots[i]} {{ id }} {{ capacity }} {{ rate }}
//     );
//     parent.appendChild(lotItems);
// }
