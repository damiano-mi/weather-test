// First letter of a string uppercase
export function upperCaseFormat(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}