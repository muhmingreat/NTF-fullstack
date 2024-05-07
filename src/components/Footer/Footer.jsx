import React from 'react'
import {TiSocialFacebook , TiSocialLinkedin,
  TiSocialTwitter, TiSocialInstagram,
  TiSocialYoutube } from 'react-icons/ti'
import './Footer.css'
import {RiSendPlaneFill} from 'react-icons/ri'
import {Discover, HelpCenter} from '../navbar/index' 

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_box'>
        <div className='footer_social_box'>
         <img src="muhmin.jpg" alt="" width={100} height={100} style={{borderRadius:'50%'}} /> 
         <p> The world's first largest digital marketplace for collectable and non-fungable tokens (NFTs).
          buy, sell exclusive digital items </p>
          <div className='footer_social'>
            <a href="#">
              <TiSocialFacebook/>
            </a>
            <a href="#">
              <TiSocialLinkedin/>
            </a>
            <a href="#">
              <TiSocialInstagram/>
            </a>
            <a href="#">
              <TiSocialTwitter/>
            </a>
            <a href="#">
              <TiSocialYoutube/>
            </a>
          </div>
        </div>
        <div className="footer_box_discover">
          <h3>Discover</h3>
          <Discover/>
        </div>
        <div className="footer_box_help">
          <h3>Help Center</h3>
          <HelpCenter/>
        </div>
        <div className="subcribe">
          <h3>Subcribe</h3>
        <div className="subcribe_box">
          <input type='email'
           placeholder='Enter your Email *'/>
           <RiSendPlaneFill className='subcribe_box_send'/>
        </div>
        <div className="subcribe_box_info">
          <p> Discover collect and sell extraordinary NFTs OpenSea
            is the Fiest and Largest NFT marketplace
          </p>
        </div>

        </div>
      </div>
  
    </div>
  )
}

export default Footer