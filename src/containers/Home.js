import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../store/actions/burgerIndex'
import withErrorHandler from '../components/hoc/withErrorHandler'
import axios from '../axios'

import Hero from '../components/Layout/Hero'
//import Cart from '../components/cart'

class Home extends Component {
    render() {
        console.log('From the home', this.props)
        return (
            <div>
                <div className='section-Hero'>
                    <Hero
                        history={this.props.history}
                        areas={this.props.areas}
                        selectedArea={this.props.selectedArea}
                        selectedCity={this.props.selectedCity}
                        onClearedSelectedCity={this.props.onClearedSelectedCity}
                        onSelectedAreas={this.props.onSelectedAreas}
                        onSelectedCity={this.props.onSelectedCity}
                        onSelectedArea={this.props.onSelectedArea}
                    />
                </div>

            </div>
        )
    }
}
Home.propTypes = {
    history: PropTypes.object,
    areas: PropTypes.array,
    selectedArea: PropTypes.string,
    selectedCity: PropTypes.string,
    onClearedSelectedCity: PropTypes.func,
    onSelectedAreas: PropTypes.func,
    onSelectedCity: PropTypes.func,
    onSelectedArea: PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        areas: state.burger.areas,
        selectedArea: state.burger.selectedArea,
        selectedCity: state.burger.selectedCity,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSelectedCity: (cityName) => dispatch(actions.selectedCity(cityName)),
        onClearedSelectedCity: () => dispatch(actions.clearedSelectedCity()),
        onSelectedAreas: (areaName) => dispatch(actions.addAreas(areaName)),
        onSelectedArea: (areaName) => dispatch(actions.selectedArea(areaName)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(Home, axios))
