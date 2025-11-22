// Enum is a way to define a set of named constants 
// Enum allow you to define a collection of related values that can be used interchangeably in your code.

enum Weather {
    Sunny = "sunny",
    Cloudy = "cloudy",
    Rainy = "rainy",
    Snowy = "snowy"
}
// console.log(Weather);
// console.log(Weather.Sunny);

const currWeather = Weather.Snowy;
console.log(`the current weather is ${currWeather} `);

