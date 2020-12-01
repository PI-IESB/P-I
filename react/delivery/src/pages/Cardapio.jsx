import React from 'react'
import Pagina from '../components/Pagina'
import { Row, Col, Button, Image, Card, Popover, OverlayTrigger, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const xtufao = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Ingredientes</Popover.Title>
        <Popover.Content>
            Queijo, Alfaçe, Carne, Tomate...
    </Popover.Content>
    </Popover>
);
const xvacina = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Ingredientes</Popover.Title>
        <Popover.Content>
            jfdsjfsjnjf
    </Popover.Content>
    </Popover>
);

export default () => {

    const tradicionais = [
        { id: 1, img: "/img/X-tufão.png", },
        { id: 2, img: "/img/x-vacina.png", },
        { id: 3, img: "/img/x-emergencial.png", },
        { id: 4, img: "/img/x-gafanhoto.png", },
    ]
    const queridinhos = [
        { id: 5, img: "/img/x-corona.png", },
        { id: 6, img: "/img/x-bolsafamilia.png", },
        { id: 7, img: "/img/x-cloroquina.png", },
        { id: 8, img: "/img/x-aglomeracao.png", },
    ]
    const combos = [
        { id: 9, img: "/img/combo-infectado.png", },
        { id: 10, img: "/img/combo-semmascara.png", },
        { id: 11, img: "/img/combo-2020.png", },
        { id: 12, img: "/img/combo-1.0.png", },
    ]

    return (
        <Pagina>
            {/* ------------------------PARTE 1----------------------- */}
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
                {tradicionais.map(item => (
                    <Col>
                        <div class="container-fluid">
                            <Card className="bg-dark text-white">
                                <Card.Img className="borda" src={item.img} alt="Card image" />
                                <Card.ImgOverlay className="bot">
                                    <Row>

                                    </Row>
                                </Card.ImgOverlay>
                                <Card.Footer className="barrapreta">
                                    <Row>
                                        <Col md={7}>
                                            <Link to={{ pathname: '/carrinho', state: { id: item.id } }}>
                                                <Button variant="success">
                                                    <Image className="bola" src="/img/dol.png" />
                                                </Button>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <OverlayTrigger trigger="click" placement="bottom" overlay={xtufao}>
                                                <Button variant="success">
                                                    <Image className="bola" src="/img/ico.png" />
                                                </Button>
                                            </OverlayTrigger>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </div>
                    </Col>
                ))}
                <Col md={{ span: 0, offset: 0 }}>
                </Col>
            </Row>

            {/* ------------------------PARTE 2----------------------- */}
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
                {queridinhos.map(item => (
                    <Col>
                        <div class="container-fluid">
                            <Card className="bg-dark text-white">
                                <Card.Img className="borda" src={item.img} alt="Card image" />
                                <Card.ImgOverlay className="bot">
                                    <Row>

                                    </Row>
                                </Card.ImgOverlay>
                                <Card.Footer className="barrapreta">
                                    <Row>
                                        <Col md={7}>
                                            <Link to={{ pathname: '/carrinho', state: { id: item.id } }}>
                                                <Button variant="success">
                                                    <Image className="bola" src="/img/dol.png" />
                                                </Button>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <OverlayTrigger trigger="click" placement="bottom" overlay={xtufao}>
                                                <Button variant="success">
                                                    <Image className="bola" src="/img/ico.png" />
                                                </Button>
                                            </OverlayTrigger>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </div>
                    </Col>
                ))}
                <Col md={{ span: 0, offset: 0 }}>
                </Col>
            </Row>

            {/* ------------------------PARTE 3----------------------- */}
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
                {combos.map(item => (
                    <Col>
                        <div class="container-fluid">
                            <Card className="bg-dark text-white">
                                <Card.Img className="borda" src={item.img} alt="Card image" />
                                <Card.ImgOverlay className="bot">
                                    <Row>

                                    </Row>
                                </Card.ImgOverlay>
                                <Card.Footer className="barrapreta">
                                    <Row>
                                        <Col md={7}>
                                            <Link to={{ pathname: '/carrinho', state: { id: item.id, combo: true } }}>
                                                <Button variant="success">
                                                    <Image className="bola" src="/img/dol.png" />
                                                </Button>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <OverlayTrigger trigger="click" placement="bottom" overlay={xtufao}>
                                                <Button variant="success">
                                                    <Image className="bola" src="/img/ico.png" />
                                                </Button>
                                            </OverlayTrigger>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </div>
                    </Col>
                ))}
                <Col md={{ span: 0, offset: 0 }}>
                </Col>
            </Row>

        </Pagina>

    )
}