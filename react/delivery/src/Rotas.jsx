import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Cabecalho from './components/Cabecalho'
import Cardapio from './pages/Cardapio'
import Carrinho from './pages/Carrinho'
import PaginaInicial from './pages/Pagina-inicial'
import Perfil from './pages/Perfil'
import SobreNos from './pages/SobreNos'

export default () => {
    return (
        <>
            <BrowserRouter>
                <Cabecalho />
                <Route exact path="/" component={PaginaInicial} />
                <Route exact path="/paginaInicial" component={PaginaInicial} />
                <Route exact path="/cardapio" component={Cardapio} />
                <Route exact path="/carrinho" component={Carrinho} />
                <Route exact path="/sobreNos" component={SobreNos} />
                <Route exact path="/perfil" component={Perfil} />
            </BrowserRouter>
        </>
    )
}
