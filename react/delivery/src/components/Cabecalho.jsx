import React, { useState } from 'react'
import './Cabecalho.css'
import { Nav, Button, Image, Col, Figure, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default (props) => {


    return (

        <>
            <Row className="barra" >
            <Col md={{ span: 1, offset: 0 }}>
                    <Container className="ml-3">
                        <Figure>
                            <Image
                                width={220}
                                height={120}
                                alt="1000x1000"
                                src="/img/Logo-person.png"
                            />
                        </Figure>
                    </Container>
                    </Col>
                    <Col md={{ span: 0, offset: 3 }}>
                    <Container className="ml-12">
                        <Figure>
                            <Image
                                width={450}
                                height={115}
                                alt="1000x1000"
                                src="/img/Logo-titulo1.png"
                            />
                        </Figure>
                    </Container>
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
                                <Nav.Link href="/perfil"><Image src="/img/perfil.png" /></Nav.Link>
                            </Nav.Item></Col>
                            <Col md={{ span: 0, offset: 0 }}><Nav.Item>
                                <Nav.Link href="/sobreNos"><Image src="/img/sobre-nos.png" /></Nav.Link>
                            </Nav.Item></Col>
                            <Col md={{ span: 3, offset: 0 }}><Nav.Item>
                                <Nav.Link href="login"><Image src="/img/login.png" /></Nav.Link>
                            </Nav.Item></Col>
                        </Nav>
                    </Container>
                </Col>
                <Col>
                    <Link to="/carrinho"><Button variant="success" size="lg"><Image src="/img/but.png" /></Button></Link>
                </Col>
            </Row >
            <br />
        </>
    )
}
