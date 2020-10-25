import React from 'react'
import Pagina from '../components/Pagina'
import { Row, Col, Button, Image, Card, Popover, OverlayTrigger } from 'react-bootstrap'
import { render } from 'react-dom';

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
  return (
    <Pagina>
      <Row>
        <Col className="barrapreta" md={{ span: 12, offset: 0 }}>
          <Col md={{ span: 12, offset: 5 }}>
            <Image src="/img/titulo1.png" />
          </Col>
        </Col>
      </Row>
      <p></p>
      <Row false="noGutters">
        <Col xs={2} md={{ span: 0, offset: 2 }}>
          <Card style={{ width: '20rem' }} className="bg-dark text-white">
            <Card.Img className="borda" src="/img/X-tufão.png" alt="Card image" />
            <Card.ImgOverlay className="bot">
              <Row>
                <Col xs={2} md={{ span: 4, offset: 0 }}>
                  <Button variant="success" size="sm"><Image className="bola" src="/img/dol.png" /></Button>
                </Col>
                <Col xs={2} md={{ span: 0, offset: 0 }}>
                  <OverlayTrigger trigger="click" placement="bottom" overlay={xtufao}>
                    <Button variant="success" size="sm"><Image className="bola" src="/img/ico.png" /></Button>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Card.ImgOverlay>
          </Card>
        </Col >
        <Col xs={2} md={{ span: 0, offset: 0 }}>
          <Card style={{ width: '20rem' }} className="bg-dark text-white">
            <Card.Img className="borda" src="/img/x-vacina.png" alt="Card image" />
            <Card.ImgOverlay className="bot">
              <Row>
                <Col xs={2} md={{ span: 4, offset: 0 }}>
                  <Button variant="success" size="sm"><Image className="bola" src="/img/dol.png" /></Button>                  
                </Col>
                <Col xs={2} md={{ span: 0, offset: 0 }}>
                <OverlayTrigger trigger="click" placement="bottom" overlay={xvacina}>
                  <Button variant="success" size="sm"><Image className="bola" src="/img/ico.png" /></Button>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Card.ImgOverlay>
          </Card>
        </Col >
      </Row>
    </Pagina>

  )
}