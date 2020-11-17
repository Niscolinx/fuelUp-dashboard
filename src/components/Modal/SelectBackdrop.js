import React from 'react';

const SelectBackdrop = (props) => (
    props.show ? <div className='backdrop' onClick={props.clicked}></div> : null

)

export default SelectBackdrop;