//ES2015
class Cookie {
  constructor(name, isGlutenFree) {
    this.name = name;
    this.isGlutenFree = isGlutenFree;
  }

  eatCookie() {
    console.log("I am eating " + this.name);
  }
}
const myCookie = new Cookie("Iced Oatmeal", false);
console.log(myCookie);
myCookie.eatCookie();
