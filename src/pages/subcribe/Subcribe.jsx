import React from 'react'
import{RiSendPlaneFill} from 'react-icons/ri'
import './Subcribe.css'
const image = '../../assets/image'


const Subcribe = () => {
  return (
    <div className='subscribe'>
        <div className='subscribe_box'>
            <div className='subscribe_box_left'>
                <h2> Never miss a drop</h2>
                <p> Subcirbe to our super-exclusive drop
                    list and be the first to tell about our upcoming drops
                </p>
                <div className='subscribe_box_left_box'>
                    <span>01</span>
                    <small>Get more discount</small>
                </div>
                <div className='subscribe_box_left_box'>
                    <span>02</span>
                    <small>Get premium discount</small>
                </div>
                <div className='subscribe_box_left_input'>
                    <input type='email 'placeholder='Enter your Email'/>
                        <RiSendPlaneFill className='subscribe_left_input_icon'/>                
            </div>
            </div>
            <div className='subscribe_box_right'>
                <img src='user1.avif' alt=''/>
                </div>
        </div>
    </div>
  )
}

export default Subcribe