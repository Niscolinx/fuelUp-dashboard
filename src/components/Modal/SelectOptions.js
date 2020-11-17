import React from 'react'
import Aux from '../hoc/HigherOrder'
import { Row } from 'react-bootstrap'
import { OptionsMap } from './OptionsList'


const SelectOptions = (props) => {


    return (

        <Aux>

            <Row>

                <h5 className='services_heading'>Select Service</h5>
            </Row>
            <Row className='services-box'>

                <OptionsMap
                    history={props.history}
                    selectedArea={props.selectedArea}
                    selectedCity={props.selectedCity}
                    title='Restaurants'
                    description='Food you love, near restaurants near you'
                />
                <OptionsMap
                    history={props.history}
                    selectedArea={props.selectedArea}
                    selectedCity={props.selectedCity}
                    title='SuperMarkets'
                    description='Things you love, from supermarkets near you'
                />

            </Row>
            <Row className='services-box'>

                <OptionsMap
                    history={props.history}
                    selectedArea={props.selectedArea}
                    selectedCity={props.selectedCity}
                    title='Pharmacies'
                    description='Top Quality medicines near you'
                />
                <OptionsMap
                    history={props.history}
                    selectedArea={props.selectedArea}
                    selectedCity={props.selectedCity}
                    title='Shops'
                    description='Purchase the most stylish, affortabel and quality products near you'
                />

            </Row>

        </Aux>
    )
}


export default SelectOptions;