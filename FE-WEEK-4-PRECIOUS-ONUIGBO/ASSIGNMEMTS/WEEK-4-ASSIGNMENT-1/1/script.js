function convertCelsius (temperature) {
    let celsius = (temperature - 32)* 5/9

    console.log("converted to celsius",celsius)
}
convertCelsius(90)

function convertFarenheit (temperature) {
    let farenheit = (temperature*9/5)+ 32

    console.log("converted to farenheit",farenheit)
}
convertFarenheit(50)