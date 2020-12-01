import React from 'react'
import Pagina from '../components/Pagina'
import { Carousel, Row, Col } from 'react-bootstrap'


export default () => {
  return (
    <Pagina>
      <Row false="noGutters">
        <div class="container-fluid">
          <Col >
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img/slide1.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img/slide2.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/img/slide3.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </div>
      </Row>
    </Pagina>

  )
}