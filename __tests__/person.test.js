import { Person } from "../src/js/person";

describe('calculate persons age on different planets', () => {
  let person;
  let oldPerson;

  beforeEach(() => {
    person = new Person("Dan", 23, 75);
    oldPerson = new Person("Bill", 80, 75);

  });

  //age on planet
  test('should return age of person on mercury', () => {
    expect(person.planetAge("mercury")).toEqual(95);
  });

  test('should return age of person on venus', () => {

    expect(person.planetAge("venus")).toEqual(37);
  });

  test('should return age of person on mars', () => {

    expect(person.planetAge("mars")).toEqual(12);
  });

  test('should return age of person on jupiter', () => {

    expect(person.planetAge("jupiter")).toEqual(1);
  });


  //Years left
  test('should return years left on mercury', () => {

    expect(person.left("mercury")).toEqual(216);
  });
  
  test('should return years left on venus', () => {

    expect(person.left("venus")).toEqual(83);
  });
  
  test('should return years left on mars', () => {

    expect(person.left("mars")).toEqual(27);
  });
  
  test('should return years left on jupiter', () => {

    expect(person.left("jupiter")).toEqual(4);
  });

  //years lived past expectancy
  test('should return years past life expectancy on mercury', () => {

    expect(oldPerson.onMercuryPast()).toEqual(20);
  });
  
  test('should return years past life expectancy on venus', () => {

    expect(oldPerson.onVenusPast()).toEqual(8);
  });
  
  test('should return years past life expectancy on mars', () => {

    expect(oldPerson.onMarsPast()).toEqual(2);
  });
  
  test('should return years past life expectancy on jupiter', () => {

    expect(oldPerson.onJupiterPast()).toEqual(0);
  });
});