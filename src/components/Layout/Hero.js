import React, { Component } from 'react'
//import { Route, Redirect } from 'react-router-dom'

import imgUrl from '../../assets/images/bg_home.jpg'
import SelectModal from '../Modal/SelectModal'
import SelectOptions from '../Modal/SelectOptions'

import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import { cityOptions } from '../../doc/data'

class Hero extends Component {
    state = {
        currentCity: null,
        oldCity: null,
        newArea: [],
        disabled: true,
        disabledPointer: 'not-allowed',
        disabledBackground: '#787878',
        isAreaTouched: false,
    }

    handleCityChange = (inputValue: any, actionMeta: any) => {
        // console.group('Input Changed');
        // console.log('the input value has been changed and it is now', inputValue);
        //  console.log(`action: ${actionMeta}`);
        // console.groupEnd();
    }

    cityChange = (newValue: any, actionMeta: any) => {
        //  console.group('Value Changed', newValue);
        // console.log('The values to compare', newValue);

        // console.log('the meta data', actionMeta);
        // console.log(`action: ${actionMeta.action}`);
        // console.groupEnd();

        if (newValue !== null) {
            // console.log('loaded city')
            // console.log('The values of the newValue', newValue.value);

            this.props.onSelectedCity(newValue.value)
            this.props.onSelectedAreas(newValue.value)

            let storeOldCity = this.state.currentCity

            if (newValue.value !== this.state.currentCity) {
                this.setState({
                    newArea: [],
                })
            }

            this.setState({
                currentCity: newValue.value,
                oldCity: storeOldCity,
                disabled: false,
                disabledPointer: 'pointer',
                disabledBackground: '#fff',
            })
        } else {
            // console.log('cleared city')
            this.props.onClearedSelectedCity()

            this.setState({
                currentCity: null,
                disabled: true,
                disabledPointer: 'not-allowed',
                disabledBackground: '#787878',
                newArea: [],
            })
        }
    }
    handleAreaChange = (inputValue: any, actionMeta: any) => {
        // console.group('Input Changed', inputValue, 'the Changed value is', actionMeta);
        // console.groupEnd();

        if (actionMeta.action === 'set-value') {
            this.setState({
                isAreaTouched: true,
            })
        }
        if (actionMeta.action === 'input-blur') {
            this.setState({
                isAreaTouched: false,
            })
        }
    }

    areaChange = (newValue: any, actionMeta: any) => {
        //console.group('Value Changed');

        // console.log('the meta data', actionMeta, 'the newValue is', newValue);
        // console.log(`action: ${actionMeta.action}`);
        //console.groupEnd();

        this.setState({
            newArea: newValue,
        })
        this.props.onSelectedArea(newValue)
    }

    render() {
        console.log('this is the state', this.state)

        let handleAreaSelection = 'modalHide'

        if (this.state.isAreaTouched) {
            handleAreaSelection = 'modalShow'
        } else {
            handleAreaSelection = 'modalHide'
        }

        const cityStyles = (height = '3rem', fontSize = '1rem') => {
            return {
                menu: (provided, state) => ({
                    ...provided,
                    //width: state.selectProps.width,
                    color: state.selectProps.menuColor,
                    padding: 10,
                }),

                option: (styles, state) => ({
                    ...styles,
                    cursor: 'pointer',
                    padding: '1rem',
                    fontSize: fontSize,
                }),
                control: (provided, state) => ({
                    ...provided,
                    cursor: 'pointer',
                    background: '#fff',
                    borderColor: 'white',
                    fontSize: fontSize,
                    minHeight: height,
                    height: height,
                    boxShadow: state.isFocused ? null : null,
                }),

                placeholder: (defaultStyles, state) => {
                    return {
                        ...defaultStyles,
                        fontSize: fontSize,
                    }
                },
                valueContainer: (provided, state) => ({
                    ...provided,
                    height: height,
                    padding: '0 6px',
                }),

                input: (provided, state) => ({
                    ...provided,
                    margin: '0px',
                }),
                indicatorSeparator: (state) => ({
                    display: 'none',
                }),
                indicatorsContainer: (provided, state) => ({
                    ...provided,
                    height: height,
                }),

                singleValue: (provided, state) => {
                    const opacity = state.isDisabled ? 0.5 : 1
                    const transition = 'opacity 300ms'

                    return { ...provided, opacity, transition }
                },
            }
        }
        const areaStyles = (
            height = '3rem',
            newState = this.state,
            fontSize = '1rem'
        ) => {
            return {
                menu: (provided, state) => ({
                    ...provided,
                    padding: 10,
                }),

                option: (styles, state) => ({
                    ...styles,
                    cursor: newState.disabledPointer,
                    padding: '1rem',
                    fontSize: fontSize,
                }),

                control: (provided, state) => {
                    const cursor = state.isDisabled ? 'not-allowed' : 'pointer'

                    return {
                        ...provided,
                        cursor: cursor,
                        fontSize: fontSize,
                        background: newState.disabledBackground,
                        borderColor: newState.disabledBackground,
                        minHeight: height,
                        height: height,
                        boxShadow: state.isFocused ? null : null,
                    }
                },

                placeholder: (defaultStyles, state) => {
                    return {
                        ...defaultStyles,
                        color: state.isDisabled ? '#9c9a9a' : '#808080',
                        fontSize: fontSize,
                    }
                },
                valueContainer: (provided, state) => ({
                    ...provided,
                    height: height,
                    padding: '0 6px',
                }),

                input: (provided, state) => ({
                    ...provided,
                    margin: '0px',
                }),
                indicatorSeparator: (state) => ({
                    display: 'none',
                }),
                indicatorsContainer: (provided, state) => ({
                    ...provided,
                    height: height,
                }),

                singleValue: (provided, state) => {
                    const opacity = state.isDisabled ? 0.5 : 1
                    const transition = 'opacity 300ms'

                    return { ...provided, opacity, transition }
                },
            }
        }

        const divStyle = {
            backgroundImage: 'url(' + imgUrl + ')',
            width: '100%',
            height: '100vh',
            backgroundSize: 'cover',
        }

        const cityPlaceholder = 'Choose City'
        const areaPlaceholder = 'Select your area'

        const animated = makeAnimated()

        return (
            <div style={divStyle}>
                <div fliuid='true' className='hero'>
                    <div className='hero_collapse'>
                        <div className='delivering mt-5'>
                            <div className='justify-content-md-center'>
                                <div md='auto' className='hero_heading'>
                                    <h1 class='hero_heading-primary'>
                                        <span class='hero_heading-primary--main'>
                                            Everything you need,
                                        </span>{' '}
                                        <span class='hero_heading-primary--sub'>
                                            delivered within minutes
                                        </span>
                                    </h1>
                                </div>
                                <div md='auto' className='hero_heading-s'>
                                    <h1 class='hero_heading-s--main'>
                                        Everything you need delivered within
                                        minutes
                                    </h1>
                                </div>
                            </div>

                            <div>
                                <h5 className='delivering_title'>
                                    Delivering to
                                </h5>
                            </div>
                            <div className='delivering_select'>
                                <div className='delivering_select-options'>
                                    <Select
                                        styles={cityStyles()}
                                        placeholder={cityPlaceholder}
                                        isClearable
                                        onChange={this.cityChange}
                                        onInputChange={this.handleCityChange}
                                        options={cityOptions}
                                        components={animated}
                                    />
                                </div>
                                <div
                                    className={
                                        this.state.disabled
                                            ? 'disabledPointer '
                                            : this.state.disabledPointer
                                    }
                                >
                                    <Select
                                        styles={areaStyles()}
                                        placeholder={areaPlaceholder}
                                        isClearable
                                        onChange={this.areaChange}
                                        onInputChange={this.handleAreaChange}
                                        options={this.props.areas}
                                        isDisabled={this.state.disabled}
                                        components={animated}
                                        value={this.state.newArea}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='services'>
                            <SelectModal
                                isAreaSelected={this.state.isAreaTouched}
                            >
                                <SelectOptions
                                    className={handleAreaSelection}
                                    history={this.props.history}
                                    selectedArea={this.props.selectedArea}
                                    selectedCity={this.props.selectedCity}
                                />
                            </SelectModal>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero
