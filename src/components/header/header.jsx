import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.scss';
import CartIcon from '../cart-icon/cart-icon';
import Cart from '../cart/cart';

// Redux selectors
import { selectCartVisibility } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => (
    <header className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <nav className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
            {currentUser ? (
                <button className='option' onClick={() => auth.signOut()}>
                    Sign Out
                </button>
            ) : (
                <Link className='option' to='/sign-in'>
                    Sign In
                </Link>
            )}
            <CartIcon />
        </nav>
        {!hidden && <Cart />}
    </header>
);

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartVisibility(state),
});

export default connect(mapStateToProps)(Header);
