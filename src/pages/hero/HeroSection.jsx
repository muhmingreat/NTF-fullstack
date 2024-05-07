import React from 'react'
import './HeroSection.css'
import { Button } from '../../components/componentIndex'
import { Service,NFTSlider, Subcribe, Title } from '../indexPage'


const HeroSection = () => {
  return (
    <div className='heroSection'>
        <div className="heroSection_box">
            <div className="heroSection_box_left">
               
               <h1>Discover , collect and sell Nfts 👨‍💻</h1> 
               <p> Discover the most outstanding NFTs in all
                topic your NFTs and sell them </p>
                <Button btnName='Start your Search'/>
            </div>
            <div className="heroSection_box_right">
                <img src="nft-1.jpeg" alt="" width={600} height={600} />
            </div>

        </div>
        <Service/>
        <NFTSlider/>
        <Subcribe/>
        <Title heading='Browse all category' 
        paragraph='Explore the NFTs in the most featured category'/>
    </div>
  )
}

export default HeroSection