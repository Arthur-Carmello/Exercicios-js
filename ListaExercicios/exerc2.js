const calculartriangulo = function (ladoa, ladob, ladoc) {
    if ((ladoa == ladob) && (ladob == ladoc)) {
        console.log('Equilátero')
    }
    else if ((ladoa == ladob) || (ladob == ladoc) || (ladoa == ladoc)) {
        console.log('Isósceles')
    }
    else {
        console.log('Escaleno')
    }
}

calculartriangulo(3, 3, 3)