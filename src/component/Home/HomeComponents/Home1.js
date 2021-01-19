import React from 'react';
import { Link } from 'react-router-dom';
import './Home1.css';

const Home1 = () => {
    return (
        <section className='section1'>
            <p id='s1p1'>정직한 가격의</p>
            <p id='s1p2'>프리미엄 면도용품 구독 서비스</p>
            <p id='s1p3'>독일산 5중날 8,900원, 첫 가입시 면도기를 드려요</p>
            <Link to='/subscription-info'><div className='s1HomeButton' >더 알아보기</div></Link>
        </section>
    )
}

export default Home1;