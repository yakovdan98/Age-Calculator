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
    case "Mercury":
      return Math.floor(this.age / this.mercConv);
    case "Venus":
      return Math.floor(this.age / this.venusConv);
    case "Mars":
      return Math.floor(this.age / this.marsConv);
    case "Jupiter":
      return Math.floor(this.age / this.jupiterConv);
    }
  }

  left(planet) {
    let convAge = 0;
    switch (planet) {
    case "Mercury":
      convAge =  Math.abs((this.expectancy - this.age)/this.mercConv);
      break;
    case "Venus":
      convAge =  Math.abs((this.expectancy - this.age)/this.venusConv);
      break;
    case "Mars":
      convAge = Math.abs((this.expectancy - this.age)/this.marsConv);
      break;
    case "Jupiter":
      convAge = Math.abs((this.expectancy - this.age)/this.jupiterConv);
      break;
    }
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