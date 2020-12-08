import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import Pagina from '../components/Pagina'
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { useForm } from 'react-hook-form'
import { mask, unMask } from 'remask'
import PagamentoValidator from '../validator/PagamentoValidator'
import PagamentoService from '../services/PagamentoService'
import CarrinhoService from '../services/CarrinhoService'

const Pagemento = (props) => {

  const { register, handleSubmit, errors } = useForm()
  const reference = { register, PagamentoValidator, errors }

  const id = props.match.params.id

  const [value, setValue] = useState()
  const [dados, setDados] = useState({})

  const [produtos, setProdutos] = useState([props]);

  const valorTotal = produtos.reduce((acc, curr) => acc + curr.valor, 0);
  var valorTotalDois = valorTotal.toFixed(2);

  function enviarDados(data) {
    PagamentoService.create(data)
    props.history.push('/pagamento')
    console.log(data)
  }

  function handleChange(event) {
    const mascara = event.target.getAttribute("mask")
    const valor = mascara ? mask(unMask(event.target.value), mascara) : event.target.value
    setDados({ ...dados, [event.target.name]: valor })
  }

  useEffect(() => {
    setProdutos(CarrinhoService.getAll())
  }, [props])

  return (

    <Pagina >
      <div class="container-fluid">
        <Row>
          <Col md={{ span: 8, offset: 0 }}>
            <Form onSubmit={handleSubmit(enviarDados)}>
              <Row sm={2}>
                <Container>
                  <Card className="text-center" className="mb-3">
                    <Card.Header className="cartao text-white "><strong>Cartão</strong></Card.Header>
                    <Card.Body>

                    <Form.Group controlId="numeroCartao">
                        <Form.Label>Número do Cartão: </Form.Label>
                        <Form.Control ref={register(PagamentoValidator.numeroCartao)} isInvalid={errors.numeroCartao}
                          onChange={handleChange} value={dados.numeroCartao} name='numeroCartao' type="text" mask="9999 9999 9999 9999" />
                        <Form.Control.Feedback type="invalid">{errors.numeroCartao?.message}</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="nome">
                        <Form.Label >Nome do titular: </Form.Label>
                        <Form.Control ref={register(PagamentoValidator.nome)} isInvalid={errors.nome}
                          onChange={handleChange} value={dados.nome} name='nome' type="text" />
                        <Form.Control.Feedback type="invalid">{errors.nome?.message}</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="validade">
                        <Form.Label>Validade: </Form.Label>
                        <Form.Control ref={register(PagamentoValidator.validade)} isInvalid={errors.validade}
                          onChange={handleChange} value={dados.validade} name='validade' type="text" mask="99 / 99" />
                        <Form.Control.Feedback type="invalid">{errors.validade?.message}</Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="codigo">
                        <Form.Label>Código de Segurança: </Form.Label>
                        <Form.Control ref={register(PagamentoValidator.codigo)} isInvalid={errors.codigo}
                        onChange={handleChange} value={dados.codigo} name='codigo' type="text" mask="999" />
                        <Form.Control.Feedback type="invalid">{errors.codigo?.message}</Form.Control.Feedback>
                      </Form.Group>

                    </Card.Body>
                    <Card.Footer className="cartao"></Card.Footer>
                  </Card>
                  <div className="mb-3" className="text-center">
                    <Button size="lg" className="mr-2" variant="success" type="submit" ><strong>Finalizar</strong></Button>
                    <Link to="/carrinho">
                      <Button size="lg" variant="danger"><strong>Voltar</strong></Button>
                    </Link>
                  </div>
                  <p></p>
                </Container>
              </Row>
            </Form>
          </Col>
          <Col md={{ span: 3, offset: 0 }}>
            <Card className="text-center text-white barrapreta mb-3">
              <Card.Header><h3><strong>Total</strong></h3></Card.Header>
              <Card.Body>
                <Card.Title><h3><strong>R$ {valorTotalDois}</strong></h3></Card.Title>
              </Card.Body>
              {/*   <Card.Footer className="text-muted">
              <Link to="/pagamento"><Button size="lg" variant="success"><strong>Finalizar pedido</strong></Button></Link>
              </Card.Footer> */}
            </Card>
            <Row>
              <Col></Col>
              <Col>
                <h1>
                  <Badge variant="primary">FRETE GRÁTIS</Badge>
                </h1>
              </Col>
              <Col></Col>
            </Row>

          </Col>
        </Row>
      </div>
    </Pagina>
  )
}
export default withRouter(Pagemento)