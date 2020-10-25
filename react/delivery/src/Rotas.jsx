import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Cabecalho from './components/Cabecalho'
import Cardapio from './pages/Cardapio'
import PaginaInicial from './pages/Pagina-inicial'

export default () => {
    return (
        <>
            <BrowserRouter>
                <Cabecalho />

                <Route exact path="/" component={PaginaInicial} />
                <Route exact path="/paginaInicial" component={PaginaInicial} />
                <Route exact path="/cardapio" component={Cardapio} />

            </BrowserRouter>
        </>
    )
}
