import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Cursor extends Component {

    createCursor = () => {
        const cursor = document.querySelector('.cursor');
                    document.addEventListener('mousemove', e => {
                        cursor.setAttribute("style", "top: " + (e.pageY - 5) + "px; left: " + (e.pageX - 5) + "px;")
                    });
    }

    render() {
        return (

            <div className='cursor'>
                
            </div>

        )
    }
}
