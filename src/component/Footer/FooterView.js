import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FooterView.css';

class FooterView extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='ft_hd'>
                    <div className = 'ft_hd_left'>
                        <Link>와이즐리 이야기</Link>
                        <Link>개인정보처리방침</Link>
                        <Link>이용안내</Link>
                        <Link>사업자 정보확인</Link>
                        <Link>이용약관</Link>
                    </div>
                    <div className = 'ft_hd_right'>
                        <Link>로그인</Link>
                        <Link>고객센터</Link>
                        <Link>대량구매</Link>
                        <Link>인재채용</Link>
                    </div>
                </div>
                <hr/>
                <div className='ft_content'>
                    <p className='ftContLine' id='fcl1'>주식회사 와이즐리컴퍼니</p>
                    <p className='ftContLine' id='fcl2'>서울특별시 성동구 왕십리로 125, 8층(성수동1가, KD타워), 대표자: 김동욱</p>
                    <p className='ftContLine' id='fcl3'>사업자등록번호: 344-88-00965, 통신사판매업신고번호: 2019-서울성동-01739</p>
                    <p className='ftContLine' id='fcl4'>개인정보보호책임자: 천민기(mkchon@wiselyshave.com), 전화번호: 1833-9133 E-mail: help@wiselyshave.com</p>
                    <p className='ftContLine' id='fcl5'>고객님은 안전하게 거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 나이스페이먼츠(주)의 구매안전서비스를 이용하실 수 있습니다.  <span>서비스가입사실 확인</span></p>
                    <p className='ftContLine' id='fcl6'>와이즐리는 서비스 품질 보증을 위하여 개인정보배상책임보험 과 생산물 피해보상보험에 가입하였습니다.</p>
                    <p className='ftContLine' id='fcl7'> Copyright ©2020 WISELY. All rights reserved. </p>
                </div>
            </div>
        );
    }
}

export default FooterView;