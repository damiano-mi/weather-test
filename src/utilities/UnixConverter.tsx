export function unixHourConverter(timestamp: number) {
    let date = new Date(timestamp * 1000);
    let hour = date.getHours();
    if (hour >= 0 && hour <= 9) return "0" + hour;
    return "" + hour;
}

export function unixDateConverter(timestamp: number) {
    let date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
}

export function unixDateHourConverter(timestamp: number) {
    let date = new Date(timestamp * 1000);
    return date.toString();
}

export function unixDayMonthConverter(timestamp: number) {
    let date = new Date(timestamp * 1000);
    return date.getDate() + " " + date.toLocaleString('default', { month: 'long' });
}