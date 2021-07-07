function equacao (a, b, c) {
    delta = Math.pow(b, 2) - 4 * a * c

    if (delta >= 0) {
        x1 = (-b + Math.sqrt (delta)) / (2 * a)
        x2 = (-b - Math.sqrt (delta)) / (2 * a)
        
        array = [x1, x2]
        return ("x1 e x2: " + array)
    }
    else {
        return ("O Delta é negativo!")
    }
    
}

console.log(equacao(2, -7, 4))

