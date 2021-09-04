import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Sobre } from './pag/Sobre'
import { Home } from './pag/Home'
import { Fotos } from './pag/Fotos'
import { Contato } from './pag/Contato'


import {Footer, Header} from "./componentes/Main"


export const Router = () => {
    return(
        <BrowserRouter>
        <Header></Header>
            <Switch>
                <Route path={['/','/home']} exact component={Home}></Route>
                <Route path='/sobre' component={Sobre}></Route>
                <Route path='/fotos' component={Fotos}></Route>
                <Route path='/contato' component={Contato}></Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}

