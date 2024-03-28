import { unixDateConverter } from "./UnixConverter";
import { HourlyWeather } from "../types/types";

// Checks if the array contains a certain date
export function hourlyExists(hourly: HourlyWeather[], date: number) {

    let exists = false;

    for (let i = 0; i < hourly.length; i++) {
        if (unixDateConverter(hourly[i].dt) === unixDateConverter(date)) {
            exists = true;
            break;
        }
    }

    return exists;
}