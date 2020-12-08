import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import Pagina from '../components/Pagina'
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { useForm } from 'react-hook-form'
import { mask, unMask } from 'remask'
import CadastroValidator from '../validator/CadastroValidator'
import PerfilService from '../services/PerfilService'

const Cadastro=(props) => {
    
const [value, setValue] = useState()
const [dados, setDados] = useState({})

useEffect(() => {
  const id = props.match.params.id
  const perfil = PerfilService.get(id)
  setDados(perfil)
}, [props])


function enviarDados(data) {
  const id = props.match.params.id

  if (id) {
    PerfilService.update(id, data)
    
  } else {
    PerfilService.create(data)
  }
  props.history.push('/perfil')
  console.log(data)
}

const  { register, handleSubmit, errors  } = useForm()
const reference =   { register, CadastroValidator, errors} 


function handleChange(event){
    // console.log(event.target.getAttribute("mask"))
    const mascara = event.target.getAttribute("mask")    
    const valor = mascara ? mask(unMask(event.target.value), mascara) : event.target.value
    setDados({...dados,[event.target.name]: valor})
  }
      return (
    
          <Pagina >
            <Form onSubmit={handleSubmit(enviarDados)}>
              <Row sm={2}>
              <Container>
              <Card className="text-center" className="mb-3">
                <Card.Header className="cartao text-white "><strong>Cadastro de Cliente</strong></Card.Header>
                  <Card.Body>
                   
                    <Form.Group controlId="nome">
                      <Form.Label>Nome: </Form.Label>
                        <Form.Control ref={register(CadastroValidator.nome)} isInvalid={errors.nome}  name='nome' type="text" /> 
                        <Form.Control.Feedback type="invalid">{errors.nome?.message}</Form.Control.Feedback>
                    </Form.Group>
                         
                    <Form.Group controlId="endereco">
                      <Form.Label>Endereço: </Form.Label>
                      <Form.Control ref={register(CadastroValidator.endereco)} isInvalid={errors.endereco} name='endereco' type="text" placeholder="" />
                      <Form.Control.Feedback type="invalid">{errors.endereco?.message}</Form.Control.Feedback>
                    </Form.Group>
    
                    <Form.Group controlId="cpf">
                      <Form.Label>CPF: </Form.Label>
                      <Form.Control ref={register(CadastroValidator.cpf)} isInvalid={errors.cpf}
                      onChange={handleChange} value={dados.cpf}
                      name='cpf' type="text" mask="999.999.999-99" />
                      <Form.Control.Feedback type="invalid">{errors.cpf?.message}</Form.Control.Feedback>
                    </Form.Group>
    
                    <Form.Group controlId="telefone">
                      <Form.Label>Telefone: </Form.Label>
                      <Form.Control ref={register(CadastroValidator.telefone)} isInvalid={errors.telefone}
                      onChange={handleChange} value={dados.telefone}
                      name='telefone' type="text" mask={'(99) 9999-9999'} />
                      <Form.Control.Feedback type="invalid">{errors.telefone?.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="email">
                      <Form.Label>Email: </Form.Label>
                      <Form.Control ref={register(CadastroValidator.email)} isInvalid={errors.email}
                      onChange={handleChange} value={dados.email}
                      name='email' type="text"/>
                      <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
                    </Form.Group>
    
                    <Form.Group controlId="cep">
                      <Form.Label>CEP: </Form.Label>
                      <Form.Control ref={register(CadastroValidator.cep)} isInvalid={errors.cep}
                      onChange={handleChange} value={dados.cep}
                      name='cep' type="text" mask="99.999-999" />
                      <Form.Control.Feedback type="invalid">{errors.cep?.message}</Form.Control.Feedback>
                    </Form.Group>
    
                    <Form.Group controlId="data_nascimento">
                      <Form.Label>Data de Nascimento: </Form.Label>
                      <Form.Control ref={register(CadastroValidator.data_nascimento)} isInvalid={errors.data_nascimento}
                      onChange={handleChange} value={dados.data_nascimento}
                      name='data_nascimento' type="text" mask="99/99/9999" />
                      <Form.Control.Feedback type="invalid">{errors.data_nascimento?.message}</Form.Control.Feedback>
                    </Form.Group>
    
                    <Form.Group controlId="senha">
                      <Form.Label>Senha: </Form.Label>
                      <Form.Control ref={register(CadastroValidator.senha)} isInvalid={errors.senha}
                      onChange={handleChange} value={dados.senha}
                      name='senha' type="password"  />
                      <Form.Control.Feedback type="invalid">{errors.senha?.message}</Form.Control.Feedback>
                    </Form.Group>
    
                    <Form.Group controlId="sexo">
                        <Form.Check ref={register} value={"Masculino"} name='sexo' type="radio"  inline label="Masculino" /> 
                        <Form.Check ref={register} value={"Feminino"} name="sexo" type="radio" inline label="Feminino" />                     
                        <Form.Control.Feedback type="invalid">{errors.nome?.message}</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">{errors.nome?.message}</Form.Control.Feedback>
                    </Form.Group>  
    
                  </Card.Body>
                  <Card.Footer className="cartao"></Card.Footer>
              </Card>
              <div className="mb-3" className="text-center">
                <Button className="mr-2" variant="primary" type="submit" >Salvar</Button>
                <Link to="/login">
                  <Button variant="danger">Voltar</Button>
                </Link>
              </div>
              <p></p>
              </Container>    
              </Row>  
            </Form>
          </Pagina>
      )
    }
    export default withRouter(Cadastro)
  
  



