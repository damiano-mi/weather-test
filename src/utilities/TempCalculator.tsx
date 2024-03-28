// Converts temperature from Kelvin scale to Celsius or Farenheit
export function tempCalculator(temp: number, unit: string) {

    let newTemp = "";

    switch (unit) {
        case "C":
            newTemp = (Math.round(temp - 273.15)) + " °C";
            break;
        case "F":
            newTemp = (Math.round(temp * 1.8 - 459.67)) + " °F";
            break;
        default:
            newTemp = (Math.round(temp)) + " K";
            break;
    }

    return newTemp;
}