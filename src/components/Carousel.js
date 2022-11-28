import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

export default class Carousel extends Component{
    render(){
        return(
            <Carousel>
                <div>
                    <img src={ss.image} alt='screenshot'/>
                </div>
            </Carousel>
        )
    }
}
