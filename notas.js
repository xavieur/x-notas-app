const fs = require('fs')
const chalk = require('chalk')

/* console.log('hola')
console.log(chalk.red.inverse('hola')) */

const leerNotas = (fichero)=>{
    try {
        const buffer = fs.readFileSync(fichero)
        const datosString = buffer.toString()
        return JSON.parse(datosString)
    } catch (error) {
        console.log(error)
        return []
    }
}

const escribirNotas=(fichero, notas)=>{
    const textoJSON = JSON.stringify(notas)
    fs.writeFileSync(fichero, textoJSON)
}

const crearNota =  (titulo, cuerpo) => {

    const notas = leerNotas('notas.json')

    // buscar si existe la nota
    const indice = notas.findIndex(
         (nota) => nota.titulo == titulo
    )
    if (indice === -1) {
        console.log(chalk.green.inverse('Nota creada'))
        notas.push({ titulo: titulo, cuerpo }) // cuerpo:cuerpo
        escribirNotas('notas.json', notas)
    } else {
        console.log(chalk.red.inverse('Nota ya existente'))
    }
}

const borrarNota = (titulo)=> {

    const notas = leerNotas('notas.json')

    const indice = notas.findIndex( (nota)=> nota.titulo === titulo)
    if (indice === -1) {
        console.log('Nota no encontrada')
    } else {
        console.log('Nota borrada')
        notas.splice(indice, 1)
        escribirNotas('notas.json', notas) // notas tiene un elemento menos
    }
}

const borrarNota2 = (titulo) => {
    const notas = leerNotas('notas.json')

    const notasFiltradas = notas.filter( (nota)=> nota.titulo !== titulo)
    if (notas.length > notasFiltradas.length) {
        console.log(chalk.green.inverse('Nota borrada'))
        escribirNotas('notas.json', notasFiltradas)
    } else {
        console.log(chalk.red.inverse('Nota no se puede borrar porque no existe'))
    }
}

const ordenarNotas = (opcion) => {
    const notas = leerNotas('notas.json')
    /* opcion: titulo, cuerpo */
    if (opcion === 'titulo') {
        notas.sort( (notaA, notaB) => {
            debugger
            if (notaA.titulo.toLowerCase() < notaB.titulo.toLowerCase()) {
                return -1
            } else if (notaA.titulo.toLowerCase() > notaB.titulo.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        notas.sort( (notaA, notaB) => {
            if (notaA.cuerpo.toLowerCase() < notaB.cuerpo.toLowerCase()) {
                return -1
            } else if (notaA.cuerpo.toLowerCase() > notaB.cuerpo.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
    escribirNotas('notas.json', notas)
}

const ordenarNotas2 = (opcion) => {
    const notas = leerNotas('notas.json')
    notas.sort( (notaA, notaB) => {
        if (notaA[opcion].toLowerCase() < notaB[opcion].toLowerCase()) {
            return -1
        } else if (notaA[opcion].toLowerCase() > notaB[opcion].toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
    escribirNotas('notas.json', notas)
}

const buscarTextoEnNotas = (texto) => {
    const notas = leerNotas('notas.json')

    const notaEncontrada = notas.find( (nota) => {
        return nota.titulo.toLowerCase().includes(texto.toLowerCase()) || nota.cuerpo.toLowerCase().includes(texto.toLowerCase())
    })

    if(notaEncontrada){
        console.log(chalk.green.inverse('Nota encontrada'))
        console.log(notaEncontrada)
    } else {
        console.log(chalk.red.inverse('No se encuentra la nota'))
    }
}

module.exports = {
    crear: crearNota,
    borrar: borrarNota2,
    ordenarNotas,
    buscarTextoEnNotas
}



