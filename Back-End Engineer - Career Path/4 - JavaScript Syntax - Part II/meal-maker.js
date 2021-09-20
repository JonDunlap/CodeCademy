const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers.push(appetizerIn);
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainIn) {
    this._courses.mains.push(mainIn);
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertIn) {
    this._courses.desserts.push(dessertIn);
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };

    switch (courseName) {
      case 'mains':
        this.mains = dish;
        break;
      case 'desserts':
        this.desserts = dish;
        break;
      case 'appetizers':
        this.appetizers = dish;
        break;
      default:
        console.log(`Course ${courseName} is not a valid course`);
        break;
    }
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);

    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');

    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal consists of ${appetizer.name}, ${main.name}, and ${
      dessert.name
    } the total price is $${totalPrice.toFixed(2)}.`;
  },
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Onion Rings', 5.0);
menu.addDishToCourse('appetizers', 'Jalapeno Poppers', 6.25);
menu.addDishToCourse('mains', 'Burger', 7.0);
menu.addDishToCourse('mains', 'Tacos', 7.5);
menu.addDishToCourse('mains', 'Meatloaf', 9.0);
menu.addDishToCourse('desserts', 'Ice Cream', 2.0);
menu.addDishToCourse('desserts', 'Gellato', 2.25);
menu.addDishToCourse('desserts', 'Strawberry Onion', 3.0);

const meal = menu.generateRandomMeal();
console.log(meal);

