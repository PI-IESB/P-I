import React, { useEffect, useState } from 'react'
import Pagina from '../components/Pagina'
import { Row, Col, Button, Image, Card, Popover, OverlayTrigger, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import CarrinhoService from '../services/CarrinhoService';

const xtufao = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Ingredientes</Popover.Title>
        <Popover.Content>Queijo, Alfaçe, Carne, Tomate...</Popover.Content>
    </Popover>
);

const Cardapio = (props) => {

    useEffect(() => {
        const id = props.match.params.id
        const carros = CarrinhoService.get(id)
        setDados(carros)
    }, [])

    const [dados, setDados] = useState({})

    const tradicionais = [
        { id: 1, img: "/img/X-tufão.png", valor: 8.99 },
        { id: 2, img: "/img/x-vacina.png", valor: 7.65 },
        { id: 3, img: "/img/x-emergencial.png", valor: 8.99 },
        { id: 4, img: "/img/x-gafanhoto.png", valor: 9.99 },
    ]
    const queridinhos = [
        { id: 5, img: "/img/x-corona.png", valor: 19.99 },
        { id: 6, img: "/img/x-bolsafamilia.png", valor: 5.99 },
        { id: 7, img: "/img/x-cloroquina.png", valor: 12.99 },
        { id: 8, img: "/img/x-aglomeracao.png", valor: 12.99 },
    ]
    const combos = [
        { id: 9, img: "/img/combo-infectado.png", valor: 20.00 },
        { id: 10, img: "/img/combo-semmascara.png", valor: 24.00 },
        { id: 11, img: "/img/combo-2020.png", valor: 30.00 },
        { id: 12, img: "/img/combo-1.0.png", valor: 18.99 },
    ]

    function enviarDados(dados) {
        CarrinhoService.create(dados)
        props.history.push('/carrinho')
        console.log(dados)
    }

    return (
        <Pagina>
            {/* ------------------------PARTE 1 - (Os Tradicionais)----------------------- */}
            <Row className="align-center">
                <Col className="barrapreta" variant="align-center" md={{ span: 12, offset: 0 }}>
                    <Container className="mr-3">
                        <Image src="/img/titulo1.png" />
                    </Container>
                </Col>
            </Row>

            <p></p>

            <Row>
                <Col md={{ span: 0, offset: 0 }}>
                </Col>
                {tradicionais.map((item, idx) => (
                    <div key={idx} enviarDados={enviarDados}>
                        <div class="container-fluid">
                            <Card className="bg-dark text-white">
                                <Card.Img className="borda" src={item.img} alt="Card image" />
                                <Card.ImgOverlay className="bot" />
                                <Card.Footer className="barrapreta">
                                    <Row>
                                        <Col md={7}>
                                            <Button size={"lg"} variant="success" onClick={() => enviarDados(item)}><strong>R$ {item.valor}</strong></Button>
                                        </Col>
                                        <Col>
                                            <OverlayTrigger trigger="click" placement="bottom" overlay={xtufao}>
                                                <Button size={"lg"} variant="primary"><Image className="bola" src="/img/ico.png" /></Button>
                                            </OverlayTrigger>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </div>
                    </div>
                ))}
                <Col md={{ span: 0, offset: 0 }}>
                </Col>
            </Row>

            {/* ------------------------PARTE 2 - (Os Queridinhos)----------------------- */}
            <p></p>

            <Row>
                <Col className="barrapreta" md={{ span: 12, offset: 0 }}>
                    <Container className="mr-3">
                        <Image src="/img/queridinhos.png" />
                    </Container>
                </Col>
            </Row>

            <p></p>

            <Row>
                <Col md={{ span: 0, offset: 0 }}>
                </Col>
                {queridinhos.map((item, idx) => (
                    <div key={idx} enviarDados={enviarDados}>
                        <div class="container-fluid">
                            <Card className="bg-dark text-white">
                                <Card.Img className="borda" src={item.img} alt="Card image" />
                                <Card.ImgOverlay className="bot" />
                                <Card.Footer className="barrapreta">
                                    <Row>
                                        <Col md={7}>
                                            <Button size={"lg"} variant="success" onClick={() => enviarDados(item)}><strong>R$ {item.valor}</strong></Button>
                                        </Col>
                                        <Col>
                                            <OverlayTrigger trigger="click" placement="bottom" overlay={xtufao}>
                                                <Button size={"lg"} variant="primary"><Image className="bola" src="/img/ico.png" /></Button>
                                            </OverlayTrigger>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </div>
                    </div>
                ))}
                <Col md={{ span: 0, offset: 0 }}>
                </Col>
            </Row>

            {/* ------------------------PARTE 3 - (Combos)----------------------- */}
            <p></p>

            <Row>
                <Col className="barrapreta" md={{ span: 12, offset: 0 }}>
                    <Container className="mr-3">
                        <Image src="/img/combos.png" />
                    </Container>
                </Col>
            </Row>

            <p></p>

            <Row>
                <Col md={{ span: 0, offset: 0 }}>
                </Col>
                {combos.map((item, idx) => (
                    <div key={idx} enviarDados={enviarDados}>
                        <div class="container-fluid">
                            <Card className="bg-dark text-white">
                                <Card.Img className="borda" src={item.img} alt="Card image" />
                                <Card.ImgOverlay className="bot" />
                                <Card.Footer className="barrapreta">
                                    <Row>
                                        <Col md={7}>
                                            <Button size={"lg"} variant="success" onClick={() => enviarDados(item)}><strong>R$ {item.valor}</strong></Button>
                                        </Col>
                                        <Col>
                                            <OverlayTrigger trigger="click" placement="bottom" overlay={xtufao}>
                                                <Button size={"lg"} variant="primary"><Image className="bola" src="/img/ico.png" /></Button>
                                            </OverlayTrigger>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </div>
                    </div>
                ))}
                <Col md={{ span: 0, offset: 0 }}>
                </Col>
            </Row>

        </Pagina>

    )
}
export default withRouter(Cardapio)