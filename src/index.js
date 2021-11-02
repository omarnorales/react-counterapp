
/*
    rafcp -> snippet to create a comp quickly
*/

import React from "react";
import ReactDOM from "react-dom";

/*Components*/
// import PrimeraApp from './PrimeraApp';
import CounterApp from "./CounterApp";

import './index.css';


const divRoot = document.querySelector('#app');

// ReactDOM.render( <PrimeraApp saludo = 'Hello, Im Goku' other = 'other' />, divRoot);
ReactDOM.render( <CounterApp value = {10} />, divRoot);

