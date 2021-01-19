import React, { Component } from 'react';
import { SIV1, SIV2, SIV3, SIV4, SIV5, SIV6 } from './SubInfoComponents';

const heights = [
    88,
    880,
    776,
    1021,
    660
];

class SubInfoView extends Component {
    state = {
        scrollTop: 0,
        width: 0,
        height: 0
    }
    componentDidMount = () => {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
        const scrollBottom = ('scroll', e.srcElement.scrollingElement.scrollBottom)
        this.setState({
            ...this.state,
            scrollTop
        });
    }

    updateWindowDimensions = () => {
        this.setState({ ...this.state, width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        const { scrollTop, height } = this.state;
        console.log(scrollTop);
        const scrTopList = [];
        for (let i = 0; i <= 5; i++) scrTopList.push(scrollTop - heights.slice(0, i).reduce((previousItem, currentItem) => previousItem + currentItem, 0));
        const scrBotList = scrTopList.map(item => item + height);
        return (
            <div className='subInfoWrapper' onScroll={this.handleScroll}>
                <SIV1 />
                <SIV2 />
                <SIV3 />
                <SIV4 scrollTop={scrTopList[4]} scrollBottom={scrBotList[4]} />
                <SIV5 scrollTop={scrTopList[5]} scrollBottom={scrBotList[5]} />
                <SIV6 scrollTop={scrTopList[6]} scrollBottom={scrBotList[6]} />
            </div>
        );
    }
}

export default SubInfoView;