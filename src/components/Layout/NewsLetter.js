import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

const NewsLetter = () => {
    return (
        <div className='newsletter'>

            <Container>
                <div className='newsletter_heading'>
                    <h3>20% Off on your first order</h3>
                    <h5>by subscribing to our newsletter!</h5>
                </div>
                <Row >
                    <Col>
                        <p className="newsletter_description">Don't miss out on your great offers and Receive deals from out top vendors via e-mail</p>
                    </Col>
                </Row>

                <Form>
                    <Form.Row className='newsletter_form'>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Control as="select" className='newsletter_form-input'>
                                <option>Absu</option>
                                <option>2</option>
                                <option>3</option>

                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="email" placeholder="Enter email" className='newsletter_form-input' />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Button type="submit" className='newsletter_form-submitBtn'>
                                subscribe to Newsletter
                                </Button>
                        </Form.Group>


                    </Form.Row>
                    <Form.Group controlId="formBasicCheckbox" className='newsletter_description'>
                        <Form.Check type="checkbox" label="I have read and accepted the terms and conditions and privacy policy" className='newsletter_form-input'/>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    )
}

export default NewsLetter;