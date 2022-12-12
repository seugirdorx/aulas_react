import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import About from './paginas/sobreNos/SobreNos';
import Login from './paginas/login/Login';
import Navbar from './components/estaticos/navbar/Navbar';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Contact from './paginas/contato/Contato';
import Home from './paginas/home/Home';
import SobreNos from './paginas/sobreNos/SobreNos';
import { Provider } from 'react-redux';
import Footer from './components/estaticos/footer/Footer';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaTema from './components/temas/listaTema/ListaTema';
import store from './store/Store';
import Contato from './paginas/contato/Contato';

function App() {

  return(
  <Provider store={store}>
  <Router>
    <Navbar />
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario />} />

        <Route path="/contato" element={<Contato/>}/>

        <Route path="/sobreNos" element={<SobreNos/>}/>

        <Route path="/temas" element={<ListaTema />} />

        <Route path="/postagem" element={<ListaPostagem />} />

        <Route path="/formularioPostagem" element={<CadastroPost />} />

        <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

        <Route path="/formularioTema" element={<CadastroTema />} />

        <Route path="/formularioTema/:id" element={<CadastroTema />} />

        <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

        <Route path="/deletarTema/:id" element={<DeletarTema />} />


      </Routes>
    <Footer />

  </Router>
  </Provider>
  )
}


export default App;