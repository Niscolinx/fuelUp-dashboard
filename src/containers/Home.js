import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import * as actions from '../store/actions/burgerIndex'
import withErrorHandler from '../components/hoc/withErrorHandler'
import axios from '../axios'

import Card from '../components/Layout/Card'
import Header from '../components/Header'
//import Cart from '../components/cart'

class Home extends Component {
    render() {
        return (
            <div>
                <div className='section-header'>
                    <Header />
                </div>
                <div className='section-Card'>
                    <ul className='card-nav'>
                        <li>
                            <Link to='/' className='card-nav__item'>
                                Browse courses
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='card-nav__item'>
                                My courses
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='card-nav__item'>
                                Lectures
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='card-nav__item'>
                                Exams
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='card-nav__item'>
                                Assignments
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='card-nav__item'>
                                Invitations
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='card-nav__item'>
                                Attendance
                            </Link>
                        </li>
                    </ul>
                    <Card />
                </div>
            </div>
        )
    }
}
Home.propTypes = {
    areas: PropTypes.array,
    selectedArea: PropTypes.string,
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
