import React, { useEffect, useState } from 'react'
import Pagina from '../components/Pagina'
import { Badge, Button, Card, CardDeck, Col, Container, Image, Row } from 'react-bootstrap'
import CarrinhoService from '../services/CarrinhoService'

export default (props) => {
  const id = props.match.params.id

  const [produtos, setProdutos] = useState([props]);

  const valorTotal = produtos.reduce((acc, curr) =>  acc + curr.valor, 0);
  var valorTotalDois = valorTotal.toFixed(2);

  const handleClick = (id) => {
    if (window.confirm("Deseja realmente remover o pedido")) { 
      CarrinhoService.delete(id)
      setProdutos(CarrinhoService.getAll())
    }
  }

  useEffect(() => {
    setProdutos(CarrinhoService.getAll())
  }, [props])

  return (
    <Pagina>

      <Row>
        <Col className="barrapreta" md={{ span: 12, offset: 0 }}>
          <Container className="mr-3">
            <Image src="/img/carrinho nome.png" />
          </Container>
        </Col>
      </Row>

      <p />

      <div class="container-fluid">
        <Row>
          <Col md={{ span: 9, offset: 0 }}>
            <Row>
              {produtos.map((item, idx) => (
                <div key={idx}>
                  <div class="container-fluid">
                    <CardDeck>
                      <Card className="bg-dark text-white mb-3">
                        <Card.Img className="borda" src={item.img} alt="Card image" />
                        <Card.Footer className="barrapreta">
                          <Row>
                            <Col md={{ span: 0, offset: 3 }}>
                              <Button variant="danger" onClick={() => handleClick(id)}><strong>Remover</strong></Button>
                            </Col>
                          </Row>
                        </Card.Footer>
                      </Card>
                    </CardDeck>
                  </div>
                </div>
              ))}
            </Row>
          </Col>
          <p />
          <Col md={{ span: 3, offset: 0 }}>
            <Card className="text-center text-white barrapreta mb-3">
              <Card.Header><h3><strong>Total</strong></h3></Card.Header>
              <Card.Body>
                <Card.Title><h3><strong>R$ {valorTotalDois}</strong></h3></Card.Title>
              </Card.Body>
              <Card.Footer className="text-muted"><Button size="lg" variant="success"><strong>Finalizar pedido</strong></Button></Card.Footer>
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