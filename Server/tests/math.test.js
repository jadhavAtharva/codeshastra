const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')

test('Should calculate total with Tip', ()=>{
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})
 
test('Should calculate total with defaul tip', ()=>{
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('Should convert farenheit to celsius', ()=>{
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('Should convert celsius to farenheit', ()=>{
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})
