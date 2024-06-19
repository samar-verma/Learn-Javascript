const car = function (company, model, year, rented) {
     return {
        company: company,
        model: model,
        year: year,
        rented: rented
     }
}

const myCar= {
    car: [],

    addCar: function(car) {
        this.car.push(car)
    },

   rentCar: function (company, model, hour) {
    let x = 0;
   for (let i = 0;i<this.car.length;i++) { if (this.car[i].company == company && this.car[i].model == model) {
    console.log('hello samar');
    x++;
        if (this.car[i].rented === false) {
            console.log(`${this.car[i].company}-${this.car[i].model}-${this.car[i].year} is successfully rented to you `);
            this.car[i].rented = true;
            console.log(`Total amount to be paid ${hour*400}/- rs`);
            console.log('thank you');
            console.log(' ');
        }
        else if (this.car[i].rented == true) {
            console.log(`Car is already rented`);
        }
    }
    
    
   }
    if (x===0) {
    console.log('car is not available');
}
},



}



const car1 = car('tata','tiago','2018',false)
const car2 = car('jeep','compass','2016',true)
const car3 = car('hyundi','verna','2022',false)
const car4 = car('suzuki','alto','2012',true)
const car5 = car('Tata', 'Nexon', 2015, false);
const car6 = car('Hyundai', 'i20', 2018, true);
const car7 = car('Mahindra', 'Scorpio', 2016, false);
const car8 = car('Toyota', 'Innova', 2019, true);
const car9 = car('Honda', 'City', 2020, false);
const car10 = car('Kia', 'Seltos', 2021, true);
const car11 = car('Ford', 'EcoSport', 2017, false);
const car12 = car('Renault', 'Kwid', 2018, true);
const car13 = car('MG', 'Hector', 2019, false);
const car14 = car('Skoda', 'Rapid', 2020, true);
const car15 = car('Volkswagen', 'Polo', 2021, false);
const car16 = car('Nissan', 'Magnite', 2022, true);
const car17 = car('Jeep', 'Compass', 2020, false);
const car18 = car('Mahindra', 'Thar', 2021, true);
const car19 = car('Tata', 'Harrier', 2022, false);

myCar.addCar(car1);
myCar.addCar(car2);
myCar.addCar(car3);
myCar.addCar(car4);
myCar.addCar(car5);
myCar.addCar(car6);
myCar.addCar(car7);
myCar.addCar(car8);
myCar.addCar(car9);
myCar.addCar(car10);
myCar.addCar(car11);
myCar.addCar(car12);
myCar.addCar(car13);
myCar.addCar(car14);
myCar.addCar(car15);
myCar.addCar(car16);
myCar.addCar(car17);
myCar.addCar(car18);
myCar.addCar(car19);




// console.log(myCar.car);

myCar.rentCar('Honda', 'City', 3)
myCar.rentCar('Tata', 'Nexon', 4)


