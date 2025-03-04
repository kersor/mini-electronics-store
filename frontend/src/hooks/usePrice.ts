export const usePrice = (str: string) => {
    const newStr = str
        .split('')
        .reverse()
        .join('')
        .replace(/(\d{3})(?=\d)/g, '$1 ')
        .split('')
        .reverse()
        .join('')

    return newStr
}