const misNotas = [
    { titulo: 'truco de VSCode',
        cuerpo: 'usar snippets para todo' },
    { titulo: 'la función filter', cuerpo: 'genera un nuevo array según un criterio' },
    { titulo: 'la función map', cuerpo: 'genera un nuevo array a partir de otro' },
    { titulo: 'la función foreach', cuerpo: 'permite ejecutar código para cada elemento de un array' },
    { titulo: 'la función sort', cuerpo: 'ordena según un criterio cualquiera' }
]

const crearNota = function (lasNotas, titulo, cuerpo) {
    // buscar si existe la nota
    const indice = lasNotas.findIndex(
        function (nota) {
            return nota.titulo == titulo
        }
    )

    if (indice === -1) {
        console.log('Nota creada')
        return lasNotas.push({ titulo: titulo, cuerpo }) // cuerpo:cuerpo
    } else {
        console.log('Nota ya existente')
        return lasNotas.length
    }
}

const borrarNota = function (lasNotas, titulo) {
    const indice = lasNotas.findIndex(function (nota) {
        return nota.titulo === titulo
    })
    if (indice === -1) {
        console.log('Nota no encontrada')
        return {}
    } else {
        console.log('Nota borrada')
        const elementoBorrado = lasNotas.splice(indice, 1)
        return elementoBorrado[0]
    }
}

const borrarNota2 = function (lasNotas, titulo) {
    const notasFiltradas = lasNotas.filter(function (nota) {
        return nota.titulo !== titulo
    })
    if (lasNotas.length > notasFiltradas.length) {
        console.log('Notas borradas')
        return lasNotas.find(function (nota) {
            return nota.titulo === titulo
        })
    } else {
        console.log('Nota no se puede borrar porque no existe')
        return {}
    }
}

const ordenarNotas = function (lasNotas, opcion) {
    /* opcion: titulo, cuerpo */
    if (opcion === 'titulo') {
        return lasNotas.sort(function (notaA, notaB) {
            if (notaA.titulo.toLowerCase() < notaB.titulo.toLowerCase()) {
                return -1
            } else if (notaA.titulo.toLowerCase() > notaB.titulo.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return lasNotas.sort(function (notaA, notaB) {
            if (notaA.cuerpo.toLowerCase() < notaB.cuerpo.toLowerCase()) {
                return -1
            } else if (notaA.cuerpo.toLowerCase() > notaB.cuerpo.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
}

const ordenarNotas2 = function (lasNotas, opcion) {
    return lasNotas.sort(function (notaA, notaB) {
        if (notaA[opcion].toLowerCase() < notaB[opcion].toLowerCase()) {
            return -1
        } else if (notaA[opcion].toLowerCase() > notaB[opcion].toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const buscarTextoEnNotas = function (lasNotas, texto) {
    const notaEncontrada = lasNotas.find(function (nota) {
        return nota.titulo.toLowerCase().includes(texto) || nota.cuerpo.toLowerCase().includes(texto)
    })

    if(notaEncontrada){
        console.log('Nota encontrada')
        return notaEncontrada
    } else {
        console.log('No se encuentra la nota')
        return {}
    }
}

/*  console.log('antes de crear nota: ', misNotas) */
console.log(crearNota(misNotas, 'Tiempo', 'Está lloviendo'))
console.log(crearNota(misNotas, 'Tiempo', 'Está soleado'))
console.log(borrarNota2(misNotas, 'Tiempo'))
console.log('ordenarNotas2: ', ordenarNotas2(misNotas, 'cuerpo'))
console.log('buscarTextoEnNotas: ', buscarTextoEnNotas(misNotas, 'ejecutar'))
console.log('después de crear nota: ', misNotas)