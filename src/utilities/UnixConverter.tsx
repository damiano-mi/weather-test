export function unixHourConverter(timestamp: number) {
    let date = new Date(timestamp * 1000);
    let hour = date.getHours();
    if (hour >= 0 && hour <= 9) return "0" + hour;
    return "" + hour;
}

export function unixMinutesConverter(timestamp: number) {
    let date = new Date(timestamp * 1000);
    let minute = date.getMinutes();
    if (minute >= 0 && minute <= 9) return "0" + minute;
    return "" + minute;
}

export function unixDateConverter(timestamp: number) {
    let date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
}

export function unixDateHourConverter(timestamp: number) {
    return unixDateConverter(timestamp).slice(0, -5) + " " + unixHourConverter(timestamp) + ":" + unixMinutesConverter(timestamp);
}

export function unixAllInfoConverter(timestamp: number) {
    let date = new Date(timestamp * 1000);
    return date.toLocaleString();
}

export function unixDayMonthConverter(timestamp: number) {
    let date = new Date(timestamp * 1000);
    return date.getDate() + " " + date.toLocaleString('default', { month: 'long' });
}

export function unixWeekNameConverter(timestamp: number) {
    let date = new Date(timestamp * 1000);
    return date.toLocaleString('en-us', {  weekday: 'long' });
}