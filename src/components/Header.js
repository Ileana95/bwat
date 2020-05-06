import React from 'react';

const Header = () => {

    const headerFixed = (e) => {
        e.target.classList.add('fixed');
    }
    return (
        <header className="fixed" onWheel={headerFixed}>
            <img className="oeuf" src="/logo.svg" alt="bwat logo"/>
            <img className="bwat" src="/logo-bwat.svg" alt="bwat logo"/>
        </header>
    )
}

export default Header;