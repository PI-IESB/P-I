import React, { useEffect, useState } from 'react'
import { Table, Button, Container } from 'react-bootstrap'
import Pagina from '../components/Pagina'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import '../components/Cabecalho.css'
import PerfilService from '../services/PerfilService'


export default (props) => {

    const id = props.match.params.id
    const [usuario, setUsuario] = useState([])

    const handleClick = (id) => {
        if (window.confirm("Deseja realmente excluir esse registro")) {
            PerfilService.delete(id)
            setUsuario(PerfilService.getAll())
        }

    }

    useEffect(()=> {
      setUsuario( PerfilService.getAll())
    }, [])

    return (

        <Container>

        <Pagina  titulo="">
        <Link to="/cadastro/">
          <Button  className="mb-3" variant="primary">Novo</Button>
        </Link>
    

        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Ações</th>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>CEP</th>
                </tr>
            </thead>
            <tbody>
                {usuario.map((item, id) =>(
                    <tr key={id}>
                    <td>
                        <Button variant="danger mb-6" onClick={() => handleClick(id)}>Excluir</Button>
                        <Link className="btn btn-primary ml-3" to={"/cadastroperfil/" + id}>Alterar</Link>
                    </td>
                    <td>{id}</td>
                    <td>{item.nome}</td>
                    <td>{item.endereco}</td>
                    <td>{item.cpf}</td>
                    <td>{item.telefone}</td>
                    <td>{item.email}</td>
                    <td>{item.cep}</td>
                </tr>
                ))}
            </tbody>
        </Table>
        </Pagina>
        </Container>
    )
}

