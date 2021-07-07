import React, { Fragment } from 'react'

export default props => [
        <h1 key='h1'>Bom dia {props.nome}!</h1>,
        <h2 key='h2'>Até breve!</h2>
]

    









/* 

--Função 

export default function() {
    return <h1>Bom dia Fulano!</h1>
}

--Função Arrow 

export default () => <h1>Bom dia Fulano!</h1>

*/

/*

Dois elementos para ser exibidos, pode ser dentro de uma div, React.Fragment, Fragment, Array...

export default props => 
    <div>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </div>

    
export default props => 
    <React.Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </React.Fragment>


export default props => 
    <Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </Fragment>


export default props => [
        <h1>Bom dia {props.nome}!</h1>,
        <h2>Até breve!</h2>
]

export default props => [
        <h1 key='h1'>Bom dia {props.nome}!</h1>,
        <h2 key='h2'>Até breve!</h2>
]

*/