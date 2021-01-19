import React, { Component } from 'react';
import { HeaderView } from '../../component';

class Header extends Component {
    static defaultProps = {
        logoImg: require('../../assets/Header/WiselyLogo.svg')
    }
    render() {
        return (
            <HeaderView data={this.props}/>
        );
    }
}

export default Header;