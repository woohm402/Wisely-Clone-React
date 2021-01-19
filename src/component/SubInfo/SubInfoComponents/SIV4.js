import React, { Component } from 'react';
import './SIV4.css';



class SIV4 extends Component {

    render() {
        const { scrollTop } = this.props;

        const plTop = (
            (scrollTop < -250) ? 150 :
                (scrollTop > 150) ? 520 :
                    (scrollTop + 250) * 370 / 400 + 150
        );

        const s4pl_style = {
            position: 'absolute',
            left: '50%',
            width: '200px',
            borderRadius: '2px',
            backgroundColor: '#0055b8',
            height: '4px',
            top: `${plTop}px`
        }

        const s4sb_style = {
            height: `${550 - plTop}px`
        }

        return (
            <section className='siv4'>
                <div className='siv4_left'>
                    <img className='siv4_sb_razor' src={require('../../../assets/SubInfo/razor_500x500.png')} />
                    <div className='siv4_sb_cover' style={s4sb_style} >
                        <img className='siv4_sb_bubble' src={require('../../../assets/SubInfo/bubble_500x500.png')} alt='bubble' />
                    </div>
                    <div style={s4pl_style} className='s4_progress_line' />
                </div>
                <div className='siv4_right'>
                    <p id='s4p1'>거품을 덜어내고,</p>
                    <p id='s4p2'>품질에 투자하다</p>
                    <p id='s4p3'>폭리와 가격거품은 모두 덜어내고 어쩌구</p>
                    <p id='s4p4'>착한건 이유가 있음 저쩌구</p>
                </div>
            </section>
        )
    }
}

export default SIV4;