import React from 'react'
import Pagina from '../components/Pagina'
import { Row, Col } from 'react-bootstrap'


export default () => {
  return (
    <Pagina>
      <Row false="noGutters">
        <Col >
              <img
                className="d-block w-100"
                src="/img/sobre.jpg"
                alt="Third slide"
              />
        </Col>
      </Row>
    </Pagina>

  )
}