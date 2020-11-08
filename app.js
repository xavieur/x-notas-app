const { crear: crearNota, borrar: borrarNota, ordenarNotas, buscarTextoEnNotas } = require('./notas')

const yargs = require('yargs')

/* crearNota('sueños','una plaza al atardecer') */

yargs.command({
    command: 'add',
    describe: 'añadir nota',
    builder: {
        titulo: {
            alias: 't',
            describe: 'el titulo',
            demandOption: true,
            type: 'string'
        },
        cuerpo: {
            alias: 'c',
            describe: 'el cuerpo',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        crearNota(argv.titulo, argv.cuerpo)
    }
})

yargs.command({
    command: 'remove',
    describe: 'borrar nota',
    builder: {
        titulo: {
            describe: 'titulo',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        borrarNota(argv.titulo)
    }
})

yargs.command({
    command: 'sort',
    describe: 'ordenar notas',
    builder: {
        criterio: {
            describe: 'título o cuerpo',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        ordenarNotas(argv.criterio)
    }
})

yargs.command({
    command: 'find',
    describe: 'buscar texto en notas',
    builder: {
        texto: {
            describe: 'texto a buscar',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        buscarTextoEnNotas(argv.texto)
    }
})

yargs.parse()
