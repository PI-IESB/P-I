import React from 'react'
import './Cabecalho.css'
import { Nav, Button, Image, Col, Figure, Row, Container } from 'react-bootstrap'

export default (props) => {
 
    return (
        
       <>
            <Row className="barra" false="noGutters" >
                <Col md={{ span: 4, offset: 1 }}>
                    <Figure>
                        <Image
                            width={220}
                            height={120}
                            alt="1000x1000"
                            src="/img/Logo-person.png"
                        />
                    </Figure>
                </Col>
                <Col md={{ span: 7, offset: 0 }}>
                    <Figure>
                        <Image
                            width={450}
                            height={115}
                            alt="1000x1000"
                            src="/img/Logo-titulo1.png"
                        />
                    </Figure>
                </Col>
                <Col>
                </Col>
            </Row>
            <p></p>
            <Row className="barra" false>
                <Col></Col>
                <Col md={{ span: 10, offset: 0 }}>
                    <Container>
                        <Nav defaultActiveKey="/home">
                            <Col></Col>
                            <Col md={{ span: 0, offset: 0 }}><Nav.Item>
                                <Nav.Link href="/"><Image className="bola" src="/img/home.png" /></Nav.Link>
                            </Nav.Item></Col>
                            <Col md={{ span: 0, offset: 0 }}><Nav.Item>
                                <Nav.Link href="/cardapio"><Image src="/img/cardapio.png" /></Nav.Link>
                            </Nav.Item></Col>
                            <Col md={{ span: 0, offset: 0 }}><Nav.Item>
                                <Nav.Link href="link-2"><Image src="/img/perfil.png" /></Nav.Link>
                            </Nav.Item></Col>
                            <Col md={{ span: 0, offset: 0 }}><Nav.Item>
                                <Nav.Link href="link-2"><Image src="/img/sobre-nos.png" /></Nav.Link>
                            </Nav.Item></Col>
                            <Col md={{ span: 3, offset: 0 }}><Nav.Item>
                                <Nav.Link href="link-2"><Image src="/img/meus-pedidos.png" /></Nav.Link>
                            </Nav.Item></Col>
                        </Nav>
                    </Container>
                </Col>
                <Col><Button variant="success" size="lg"><Image src="/img/but.png" /></Button></Col>
            </Row >
            <br />
        </>
    )
}
