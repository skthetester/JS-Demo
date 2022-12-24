const cookie = {
  name: "Chocolate Chip",
  "brand name": "Oreo",
  isGlutenFree: false,
  eatCookie: function () {
    console.log("I am eating " + this.name);
  },
};
console.log(cookie);

cookie.name = "Chip Chocolate";
cookie.isGlutenFree = true;
//console.log(cookie["+Yummy"]);
console.log(cookie);
// cookie.eatCookie;
