import React, { useEffect, useState } from 'react'
import {  Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
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

        dados = { ...dados , cpf: unMask(dados.cpf), cep: unMask(dados.cep)}
        LoginService.create(dados)
        // .then(results => {
        //   console.log(results)
        // }).catch(error => {
            console.log(dados)
    }
    
        return (
    
            <Pagina >
                <Container className="align-center">
                <Form>
                    <Row className="mb-3">
                     <Col sm={5}>
                     <Card.Header className="bg-danger text-white ">Login</Card.Header>
                      <Card.Body>
                       <Input label='Usuário' name='usuario' reference={reference} />
                       <Input label='Senha' name='senha' type="password" reference={reference} />
                       </Card.Body>
                     </Col>
                    </Row>
       
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}>Entrar</Button>
                        <Link to="/paginaInicial" className="btn btn-danger ml-1">Voltar</Link>
                    </div>
                    <div>
                        <Link to="/cadastro">Fazer Cadastro</Link>
                    </div>
                </Form>
                </Container>
            </Pagina>
          )
         }
        
    




