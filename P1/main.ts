const discos:number = 3

function torreHanoi(discoActual: number, inicio: string, destino: string, aux: string): void {

    if (discoActual===1){
        console.log(`Movemos Disco ${discoActual} de ${inicio} a ${destino}`)
        return;
    }
        torreHanoi(discoActual-1, inicio, aux, destino)
            console.log(`Movemos Disco ${discoActual} de ${inicio} a ${destino}`)
        torreHanoi(discoActual-1, aux, destino, inicio)
    
}

torreHanoi(discos, 'inicio', 'destino', 'aux');