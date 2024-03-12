export function unixConverter(timestamp: number){
    let date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
}