
diasFeriados : Date[];
diasLetivos  : Date[];
inicioTerminoPeriodo  : Date[];
sabadoLetivo  : Date[];
recessoInstitucional  : Date[];
recessoCopa : Date[];


const diasEspeciais: {[key:Date[]] : Date}   =  {diasFeriados: [new Date('11/02/2022'),new Date('11/15/2022'),new Date('11/20/2022')],
diasLetivos : [new Date('11/01/2022'), new Date('11/03/2022'), new Date('11/04/2022')],
inicioTerminoPeriodo : [new Date('11/01/2022'),new Date('11/30/2022')],
sabadoLetivo : [new Date('11/05/2022'),new Date('11/12/2022'),new Date('11/19/2022'),new Date('11/26/2022')],
recessoInstitucional : [new Date('11/14/2022')],
recessoCopa : [new Date('11/24/2022'), new Date('11/28/2022')]
}

console.log(diasEspeciais);