import React from 'react';
import {NavLink} from 'react-router-dom';
export default class Header extends React.Component {
    render(){
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <p className='navbar-brand'>HackerNews</p>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <NavLink to={'/'} exact className={'nav-link'} activeClassName={'active'}>
                            New
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={'/top'} exact className={'nav-link'} activeClassName={'active'}>
                            Top
                        </NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}