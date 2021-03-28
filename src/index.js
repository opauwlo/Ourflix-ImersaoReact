import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home';
import CadastroVideo from './Pages/Cadastro/Video'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './Pages/Cadastro/Categoria';


// Mudar página 404 
const Pagina404 = () => (<div>Pagina 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />

    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);
