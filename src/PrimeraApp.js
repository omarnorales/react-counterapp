
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( {saludo, subtitle } ) => {

    if(!saludo){
        throw new Error('Saludo is mandatory');
    }

    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitle}</p>
            {/* <pre>{ JSON.stringify(objPerson, null, 3) }</pre> */}
        </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    other: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitle: 'I am a subtitle'
}

export default PrimeraApp;