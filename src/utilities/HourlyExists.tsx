import { HourlyWeather } from "../types/types";
import { unixDateConverter } from "./UnixConverter";

export function hourlyExists(hourly: HourlyWeather[], date: number){
    
    let exists = false;

    for(let i=0; i<hourly.length; i++){
        if(unixDateConverter(hourly[i].dt)===unixDateConverter(date)){
            exists=true;
            break;
        }
    }

    return exists;
}