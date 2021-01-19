import React from 'react';
import { Link } from 'react-router-dom';
import './Home5.css';

const Home5 = () => {
    return (
        <section className='section5'>
            <h1>가장 높은 기준으로 만든 프리미엄 면도 용품</h1>
            <div className='shaves'>
                <div>
                    <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/home/thumbnail_1.png"/>
                </div>
                <div>
                    <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/home/thumbnail_2.png"/>
                </div>
                <div>
                    <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/home/thumbnail_3.png"/>
                </div>
                <div>
                    <img src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/home/thumbnail_4.png"/>
                </div>
            </div>
            <Link to='product/gift-set'><div className='homeButton' >나에게 맞는 제품 추천 받기</div></Link>
        </section>
    )
}

export default Home5;