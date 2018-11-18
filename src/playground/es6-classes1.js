//Car
//make
//model
//vin
//getDescription

class Person {
    
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi! i am ${ this.name }.`;
    }

    getDescription(){
        return `${ this.name } is ${ this.age} yrs old.`;
    }
}

class Students extends Person {
      constructor(name,age,major){
        super(name,age);
        this.major = major;
      }

      hasMajor () {
          return !!this.hasMajor;
      }

      getDescription(){
        
        let description = super.getDescription();

        if(this.hasMajor)
        {
            description += ` and major in ${this.major}`;
        }
        return description;
      }
}

class Traveler extends Person {
      constructor(name,age,homeLocation = '')
      {
          super(name,age);
          this.homeLocation = homeLocation;
      }

      getGreeting()
      {
        let greeting = super.getGreeting();

        if(this.homeLocation)
        {
            greeting += ` I'm visiting from ${this.homeLocation}`;   
        }
        return greeting;
      }
}

const me = new Traveler('nathaniel pascual',38,'Tarlac City');
console.log(me.getGreeting());

const me1 = new Traveler();
console.log(me1.getGreeting());