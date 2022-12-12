import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/Actions';
import {Box} from '@mui/material';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let navigate = useNavigate();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        alert("Usuário deslogado")
        navigate('/login')
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent = <AppBar position="static" className='header'>
        <Toolbar variant="dense">
            <Box className='cursor'>
                <Typography variant="h5" color="inherit">
                    Generatedu
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to="/home" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Página Inicial
                        </Typography>
                    </Box>
                </Link>
                <Link to="/postagem" className="text-decorator-none">
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            postagens
                        </Typography>
                    </Box>
                </Link>
                <Link to="/temas" className="text-decorator-none">
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        temas
                    </Typography>
                </Box>
                </Link>
                <Link to="/formularioTema" className="text-decorator-none">
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        cadastrar tema
                    </Typography>
                </Box>
                </Link>
                <Link to="/formularioPostagem" className="text-decorator-none">
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        cadastrar postagem
                    </Typography>
                </Box>
                </Link>
                <Link to="/sobreNos" className="text-decorator-none">
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Sobre Nós
                    </Typography>
                </Box>
                </Link>
                <Link to="/contato" className="text-decorator-none">
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Contato
                    </Typography>
                </Box>
                </Link>
              
                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>
                
            </Box>

        </Toolbar>
    </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;