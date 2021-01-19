import React, { Component } from 'react';
import './Home6.css';

class Home6 extends Component {
    state = {
        visible: 1
    }
    render() {
        const click1 = () => { this.setState({visible: 1}) }
        const click2 = () => { this.setState({visible: 2}) }
        const click3 = () => { this.setState({visible: 3}) }
        const { visible } = this.state;

        const v1 = (visible===1? 'visb' : 'invisb');
        const v2 = (visible===2? 'visb' : 'invisb');
        const v3 = (visible===3? 'visb' : 'invisb');

        return (
            <section className='section6'>
                <div>
                    <p className={'s6_news_content ' + v1} id='s6n1'>
                        다이아몬드 코팅된 독일산5중날로서<br/>
                        우수한 절삭력을 보여주는데도 1만원 이하다.
                    </p>
                    <p className={'s6_news_content ' + v2} id='s6n2'>
                        독점화된 면도기 시장을 '가성비'로 뚫은 브랜드,<br/>
                        시장을 정확히 파고 들었다.
                    </p>
                    <p className={'s6_news_content ' + v3} id='s6n3'>
                        뛰어난 절삭력, 간결한 구성과<br/>
                        효율적인 디자인이 만들어내는 만족감
                    </p>
                </div>
                <div className='ns_buttons'>
                    <span onClick={click1}><img className={'s6b ' + v1} src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/news/news_1.svg" /></span>
                    <span onClick={click2}><img className={'s6b ' + v2} src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/news/news_2.svg" /></span>
                    <span onClick={click3}><img className={'s6b ' + v3} src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/news/news_3.svg" /></span>
                </div>
            </section>
        );
    }
}

export default Home6;