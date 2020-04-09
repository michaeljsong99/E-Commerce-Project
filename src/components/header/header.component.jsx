import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg'; // syntax for importing SVG in React.

import './header.styles.scss';

const Header = ({currentUser}) => ( // header must know if user is signed in or out.
    <div className = 'header'>
        <Link className = 'logo-container' to="/">
            <Logo classname='logo'/>
        </Link>
        <div className = 'options'>
            <Link className='option' to= '/shop'>
                SHOP
            </Link>
            <Link className='option' to= '/contact'>
                CONTACT
            </Link>
            { 
                currentUser ? 
                (<div className = 'option' onClick={() => auth.signOut()}>SIGN OUT</div>) :
                (<Link className = 'option' to='/signin'>SIGN IN</Link>)
            }

        </div>
    </div>
)

export default Header;
