import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { unMask } from 'remask'
import Input from '../components/Input'
import Pagina from '../components/Pagina'
import LoginService from '../services/LoginService'
import LoginValidator from '../validator/LoginValidator'

export default () => {

    const { register, handleSubmit, errors } = useForm()
    const reference = { register, validator: LoginValidator, errors: errors }

    function enviarDados(dados) {

        dados = { ...dados, cpf: unMask(dados.cpf), cep: unMask(dados.cep) }
        LoginService.create(dados)
        // .then(results => {
        //   console.log(results)
        // }).catch(error => {
        console.log(dados)
    }

    return (

        <Pagina >
            <Container className="mr">
                <Form>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Card className="mb-3" variant="bg-dark">
                                <Card.Header className="cartao text-white "><strong>Login</strong></Card.Header>
                                <Card.Body>
                                    <Input label='Usuário' name='usuario' reference={reference} />
                                    <Input label='Senha' name='senha' type="password" reference={reference} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mb-3" >
                        <Col md={{ span: 6, offset: 3 }}  >
                            <div className="text-center">
                                <Button variant="success" onClick={handleSubmit(enviarDados)}>Entrar</Button>
                                <Link to="/paginaInicial" className="btn btn-danger ml-1">Voltar</Link> <p/> <hr/> <p><strong><Badge variant="dark"> OU </Badge></strong></p> 
                                <Link className="btn btn-primary" to="/cadastro">Fazer Cadastro</Link>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Pagina>
    )
}






