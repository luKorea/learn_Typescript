var createCircle = function (config) {
    var newCircle = { color: '#008c8c', area: 100 };
    if (config.color) {
        newCircle.color = config.color;
    }
    if (config.radius) {
        newCircle.area = Math.PI * config.radius * config.radius;
    }
    return newCircle;
};
var circle = createCircle({ radius: 10 });
console.log(circle);
var getMax = function (number1, number2) {
    return number1 > number2;
};
console.log(getMax(10, 20));
