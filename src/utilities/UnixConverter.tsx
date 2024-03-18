export function unixHourConverter(timestamp: number){
    let date = new Date(timestamp * 1000);
    return date.getHours();
}

export function unixDateConverter(timestamp: number){
    let date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
}

export function unixDateHourConverter(timestamp: number){
    let date = new Date(timestamp * 1000);
    return date.toString();
}

export function unixDayMonthConverter(timestamp: number){
    let date = new Date(timestamp * 1000);
    return date.getDate() + " " + date.toLocaleString('default', { month: 'long' });
}