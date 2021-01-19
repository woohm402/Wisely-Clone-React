import React from 'react';
import { Link } from 'react-router-dom';
import './Home2.css';

const Home2 = () => {
    return (
        <div className='section2'>
            <Link to='product/gift-set'><div className='s2HomeButton' >더 알아보기</div></Link>
        </div>
    )
}

export default Home2;