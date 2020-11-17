import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import location from '../../assets/svg/001-location.svg'
import product from '../../assets/svg/002-inventory.svg'
import delivery from '../../assets/svg/003-food-delivery.svg'


const Steps = () => {


    return (
        <div className='simple-steps'>
            <Container>
                <Row className='simple-steps_header'>
                    <h2 className='simple-steps_header--title'>Simple Steps</h2>
                </Row>

                <Row className='simple-steps_box'>

                    <Col className='simple-steps_box-item'>
                        <img src={location} alt='' className='iconStyle' />
                        <h5 className='simple-steps_title'>Set delivering location</h5>
                        <p className='simple-steps_description'>Browse shops that deliver near you</p>
                    </Col>
                    <Col className='simple-steps_box-item'>
                        <img src={product} alt='' className='iconStyle' />
                        <h5 className='simple-steps_title'>Choose the product</h5>
                        <p className='simple-steps_description'>Browse shops that deliver near you</p>
                    </Col>
                    <Col className='simple-steps_box-item'>
                        <img src={delivery} alt='' className='iconStyle' />
                        <h5 className='simple-steps_title'>Receive it at your doorstep</h5>
                        <p className='simple-steps_description'>Browse shops that deliver near you</p>
                    </Col>

                </Row>
            </Container>
        </div>

    )
}

export default Steps
