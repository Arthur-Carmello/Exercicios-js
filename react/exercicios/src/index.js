import React from 'react'
import ReactDOM from 'react-dom'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passo os componentes Filhos aqui? */}
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
, document.getElementById('root'))







//import Primeiro from './componentes/Primeiro' --- exercicio anterior
//import BomDia from './componentes/BomDia'
//import { BoaTarde, BoaNoite } from './componentes/Multiplos'
//import BoaTarde, { BoaNoite } from './componentes/Multiplos'

//const elemento = <h1>React</h1>
//ReactDOM.render(elemento, document.getElementById('root'))   ---JSX - extensão do JS
//ReactDOM.render(<BomDia nome="Guilherme"/>, document.getElementById('root'))
//ReactDOM.render(<BomDia nome="Guilherme" idade={10}/>, document.getElementById('root'))

/*

import Multi from './componentes/Multiplos'

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana" />
        <Multi.BoaNoite nome="Bia" />
    </div>
, document.getElementById('root'))


import Multi, { BoaNoite} from './componentes/Multiplos'

*/