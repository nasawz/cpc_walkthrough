import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'

import './style.less'

class Walkthrough extends Component {
    render() {
        return (
            <div>
                <Carousel
                    className="my-carousel" autoplay={false} infinite >
                
                        <div style={{
                            width: '100%',
                            height: `${window.innerHeight}px`,
                            backgroundImage: `url(${require('../../img/welcomeBg.jpg')})`,
                            backgroundSize: 'cover'
                        }}></div>
                 
                        <div style={{
                            width: '100%',
                            height: `${window.innerHeight}px`,
                            backgroundImage: `url(${require('../../img/welcomeBg1.jpg')})`,
                            backgroundSize: 'cover'
                        }}></div>
                </Carousel>
            </div>
        )
    }
}

export default Walkthrough