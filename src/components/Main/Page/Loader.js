import React from 'react';
import './Loader.css';

export default class Loader extends React.Component {
    render(){
        return (
            <div className='loader-container'>
                <div className='lds-dual-ring'></div>
            </div>
        )
    }
}