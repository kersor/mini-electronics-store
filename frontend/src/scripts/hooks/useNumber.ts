export const useNumber = (str: string) => {
    const regax = /^-?\d+(\.\d+)?$/
    const number = regax.test(str)

    if (number) return str
    else {
        const arrayStr = str.split('')
        arrayStr.splice(arrayStr.length - 1, 1)
        const newStr = arrayStr.join('')
        
        return newStr
    }
}