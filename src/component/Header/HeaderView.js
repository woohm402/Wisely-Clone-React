import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderView.css';

class HeaderView extends Component {
    render() {
        return (
            <div className='header'>
                <Link className='logoLink' to='/'>
                    <img src={this.props.data.logoImg} />
                </Link>
                <div className='menus'>
                    <Link to='/subscription-info' className='menuContent'>시작하기</Link>
                    <span className='menuContent'>상품보기</span>
                    <Link className='menuContent'>대용량 팩 할인</Link>
                    <Link className='menuContent'>와이즐리 이야기</Link>
                    <Link className='menuContent'>고객센터</Link>
                </div>
                <div className='myMenu'>
                    <Link className='myContent'>로그인</Link>
                    <Link className='myContent'>장바구니</Link>
                </div>
            </div>
        );
    }
}

export default HeaderView;