// Business Logic
export class Person {

  constructor(name, age, expectancy) {
    this.name = name;
    this.age = age;
    this.expectancy = expectancy;
    this.mercConv = .24;
    this.venusConv = .62;
    this.marsConv = 1.88;
    this.jupiterConv = 11.86;
  }

  planetAge(planet) {
    switch (planet) {
    case "mercury":
      return Math.floor(this.age / this.mercConv);
    case "venus":
      return Math.floor(this.age / this.venusConv);
    case "mars":
      return Math.floor(this.age / this.marsConv);
    case "jupiter":
      return Math.floor(this.age / this.jupiterConv);
    }
  }

  
  onMercuryLeft(){
    let convAge =  Math.abs((this.expectancy - this.age)/this.mercConv);
    return Math.floor(convAge);
  }

  onVenusLeft(){
    let convAge =  Math.abs((this.expectancy - this.age)/this.venusConv);
    return Math.floor(convAge);
  }

  onMarsLeft(){
    let convAge =  Math.abs((this.expectancy - this.age)/this.marsConv);
    return Math.floor(convAge);
  }

  onJupiterLeft(){
    let convAge =  Math.abs((this.expectancy - this.age)/this.jupiterConv);
    return Math.floor(convAge);
  }

  onMercuryPast(){
    let convAge =  Math.abs((this.age - this.expectancy)/this.mercConv);
    return Math.floor(convAge);
  }

  onVenusPast(){
    let convAge =  Math.abs((this.age - this.expectancy)/this.venusConv);
    return Math.floor(convAge);
  }

  onMarsPast(){
    let convAge =  Math.abs((this.age - this.expectancy)/this.marsConv);
    return Math.floor(convAge);
  }

  onJupiterPast(){
    let convAge =  Math.abs((this.age - this.expectancy )/this.jupiterConv);
    return Math.floor(convAge);
  }
}