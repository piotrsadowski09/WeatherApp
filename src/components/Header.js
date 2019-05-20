import React from 'react';
import Logo from '../styles/images/icons/logo.svg'



class Header extends React.Component {

    
    render() {
        return (
            <header >
                <div className={"container"}>
                    <a href=".">Todaysweather.com</a>
                    <img className={"logo"} src={Logo} alt="Logo"/>
                </div>
            </header>
        )
    }
}

export default Header;