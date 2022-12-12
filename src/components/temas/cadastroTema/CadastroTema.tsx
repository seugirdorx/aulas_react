import { Button, Container, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { TokenState } from '../../../store/tokens/TokensReducer';
import { buscaId, post, put } from '../../../services/Service';
import Tema from "../../../models/Tema";

function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    const [tema, setTema] = useState<Tema>({
        id: 0,
        educacao: '',
        serie: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])
async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedTema(e: ChangeEvent<HTMLInputElement>) {

            setTema({
                ...tema,
                [e.target.name]: e.target.value,
            })

        }

        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("tema " + JSON.stringify(tema))

            if (id !== undefined) {
                console.log(tema)
                put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema atualizado com sucesso');
            } else {
                post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema cadastrado com sucesso');
            }
            back()

        }

        function back() {
            navigate('/temas')
        }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={tema.educacao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="educacao" label="educacao" variant="outlined" name="educacao" margin="normal" fullWidth />
                <TextField value={tema.serie} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="serie" label="serie" variant="outlined" name="serie" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;