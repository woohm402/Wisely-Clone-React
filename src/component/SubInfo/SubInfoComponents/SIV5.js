import React from 'react';
import './SIV5.css';

const SIV5 = props => {
    console.log(props.scrollTop + ' ' + props.scrollBottom);
    // scrollBottom 620~620+471: 1, 620+471~620+471*2: 2
    const { lImgCls, active } = (props.scrollBottom < 620)? { lImgCls: 'li li1 rel', active: 1 } : 
                                (props.scrollBottom < 1070)? { lImgCls: 'li li1 fix', active: 1 } : 
                                (props.scrollBottom < 1520)? { lImgCls: 'li li2 fix', active: 2 } : 
                                (props.scrollBottom < 2035)? { lImgCls: 'li li3 fix', active: 3 } : 
                                { lImgCls: 'li li3 rel', active: 3 };
    
    const active1 = (active===1)? 'active' : 'inactive';
    const active2 = (active===2)? 'active' : 'inactive';
    const active3 = (active===3)? 'active' : 'inactive';
    return (
        <section className='siv5'>
            <div className='siv5_left'>
                <div className={lImgCls} />
            </div>
            <div className='siv5_right'>
                <section className={`rs rs1 ${active1}`}>
                    <div className={`leftCircle ${active1}`}/>
                    <div className={`leftBar ${active1}`}/>
                    <p className='rp header'>
                        Wisely
                    </p>
                    <p className='rp title'>
                        더 높은 기준을 찾아<br/>
                        전세계로
                    </p>
                    <p className='rp content'></p>
                </section>
                <section className={`rs rs2 ${active2}`}>
                    <div className={`leftCircle ${active2}`}/>
                    <div className={`leftBar ${active2}`}/>
                    <p className='rp header'>
                        New York
                    </p>
                    <p className='rp title'>
                        미국 뉴욕의 디자이너,<br/>
                        문제를 해결하는 디자인
                    </p>
                    <p className='rp content'></p>
                </section>
                <section className={`rs rs3 ${active3}`}>
                    <div className={`leftCircle ${active3}`}/>
                    <p className='rp header'>
                        Germany
                    </p>
                    <p className='rp title'>
                        독일 졸링겐의 엔지니어,<br/>
                        정교한 기술력과 장인정신
                    </p>
                    <p className='rp content'></p>
                </section>
            </div>
        </section>
    )
}

export default SIV5;