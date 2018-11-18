//argument object - no longer bound with arrow functions


const add = (a,b) => {
    return a + b;
}

console.log(add(55,1));

//this keyword - no longer bound

const user = {
    name : 'Nathan',
    cities :['Tarlac','Caloocan','Quezon'],

    printPlacesLived () {
        console.log(this.name);
        console.log(this.cities);

        return this.cities.map((city)=>  this.name + ' has lived in '+ city);
        // this.cities.forEach((city)=>{
        //     console.log(this.name + ' has lived in ' + city);
        // });
 
    }
};
console.log(user.printPlacesLived());


//const multiplier = {
    //number = array of numbers
    //multiplier = single number
    //product = return a new array where the number have been multiplied
//}

const multiplier = {
    numbers : [14,25,80,81],
    multiplyby : 2,
    multiply () {
        return this.numbers.map((number)=> number * this.multiplyby);
    }
};

console.log(multiplier.multiply());
