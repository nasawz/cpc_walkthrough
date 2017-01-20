import React from 'react'
import { Carousel } from 'antd-mobile'
import { Flex } from 'antd-mobile'
import { Button } from 'antd-mobile'
import './style.less'

const Walkthrough = React.createClass({
    render() {
        return (
            <div>
                <Carousel
                    className="my-carousel" autoplay={false} infinite>
                    <div style={{
                        backgroundImage: `url(${require('../../img/welcomeBg.jpg')})`,
                        backgroundSize: 'cover'
                    }}>
                        <div style={{
                            width: `${window.innerWidth}px`,
                            height: `${window.innerHeight}px`,
                        }}>
                            <Flex direction='column' justify='center' style={{
                                width: '100%',
                                height: `${window.innerHeight}px`,
                            }}>
                                <div style={{
                                    textAlign: 'center',
                                    fontSize: '18px',
                                    color: 'white',
                                    marginBottom: '20px',
                                }}>
                                    UI KIT,{window.scale}
                                </div>
                                <div style={{
                                    textAlign: 'center',
                                    fontSize: '38px',
                                    color: 'white',
                                    marginBottom: '40px'
                                }}>WELCOME<br />
                                    TO NICESN<br />
                                    PACK
                            </div>
                                <Flex>
                                    <Button
                                        style={{
                                            fontSize: '18px',
                                            width: '120px',
                                            height: '40px',
                                            lineHeight: '40px',
                                            borderTopLeftRadius: '40px',
                                            borderTopRightRadius: '40px',
                                            borderBottomLeftRadius: '40px',
                                            borderBottomRightRadius: '40px'
                                        }}
                                        className="btn" type="primary">开始</Button>
                                </Flex>
                            </Flex>
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: `url(${require('../../img/welcomeBg1.jpg')})`,
                        backgroundSize: 'cover'
                    }}>
                        <div style={{
                            width: `${window.innerWidth}px`,
                            height: `${window.innerHeight}px`,
                        }}>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
})

export default Walkthrough