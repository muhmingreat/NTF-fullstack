import React,{useState,useEffect, useCallback} from 'react'
import './NFTSlider.css'
import {AiFillFire, AiFillHeart, AiOutLineHeart} from 'react-icons/ai'
import{ MdVerified, MdTimer} from 'react-icons/md'
import { TbArrowBigLeftLines,TbArrowBigRightLines} from 'react-icons/tb'
import { Button } from '../../components/componentIndex'
// const images = '../../assets/image/'

const sliderData = [
    {
        title:"hello NFT", 
       id:1,
       name:'Muhmin Soliu',
       collection:"ABS",
       price: "00000067  eth",
       like: 243,
        image:'user1.avif',
        nftImage:'nft3.jpeg',
        time:{
            days: 27,
            hours:10,
            minutes:50,
            seconds:4
        }
    },
    {
        title:"Mr Ben", 
        id:2,
        name:'Muhmin Soliu',
        collection:"ABS",
       price: "00000067  eth",
       like: 243,
        image:'user4.avif',
        nftImage:'/nft4.jpeg',
        time:{
            days: 27,
            hours:10,
            minutes:50,
            seconds:4
        }
    },
    {
       title:"Hello Guy", 
       id:3,
       name:'Muhmin Soliu',
       collection:"TS",
       price: "00000067  eth",
       like: 243,
       image:'user3.jpeg',
        nftImage:'nft3.jpeg',
        time:{
            days: 27,
            hours:10,
            minutes:50,
            seconds:4
        }
    },
    {
       title:"Hello NFT", 
       id:4,
       name:'Muhmin Soliu',
       collection:"User",
       price: "00000067  eth",
       like: 243,
        image:'user2.avif',
        nftImage: 'nft2.png',
        time:{
            days: 27,
            hours:10,
            minutes:50,
            seconds:4
        }
    },
]

const NFTSlider = () => {
    const [idNumber, setIdNumber] = useState(1)

    const increment = useCallback(( ) => {
    if(idNumber + 1 < sliderData.length) {
        setIdNumber(idNumber + 1)
    } 
    },[idNumber, sliderData])
    const decrement = useCallback( ( ) => {
    if(idNumber >0) {
        setIdNumber(idNumber - 1)
    } 
    },[idNumber])
  return (
    <div className="slider">
      <div className="slider_box">
        <div className="slider_box_left">
          <h2>{sliderData[idNumber].title}</h2>
          <div className="slider_box_left_creator">
            <div className="slider_box_left_creator_profile">
              <img
                src={sliderData[idNumber].image}
                alt=""
                width={50}
                height={50}
              />
              <div className="slider_box_left_creator_profile_img">
                <p> Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>
            <div className="slider_box_left_creator_collection">
              <AiFillFire className="slider_box_left_creator_collection_icon" />
              <div className="slider_box_left_creator_collection_info">
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>
          <div className="slider_box_left_bidding">
            <div className="slider_box_left_bidding_box">
              <small> Current Bid</small>
              <p>
                  {sliderData[idNumber].price}
                  <br /> <span>$222,221</span>
                </p>
              
            </div>
            <p className="slider_box_left_bidding_box_auction">
              <MdTimer className="slider_box_left_bidding_box_icon" />
              <span>Auction ending in</span>
            </p>
            <div className="slider_box_left_bidding_timer">
              <div className="slider_box_left_bidding_timer_item">
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>
              <div className="slider_box_left_bidding_timer_item">
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>
              <div className="slider_box_left_bidding_timer_item">
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>Minutes</span>
              </div>
              <div className="slider_box_left_bidding_timer_item">
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>Seconds</span>
              </div>
              </div>
              <div className="slider_box_left_button">
                <Button btnName="Place" handleClick={() => {}} />
                <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className="slider_box_left_sliderBtn">
            <TbArrowBigLeftLines
              className="slider_box_left_sliderBtn_icon"
              onClick={() => decrement()}
            />
              <TbArrowBigRightLines
                className="slider_box_left_sliderBtn_icon"
              onClick={() =>  increment()}
            />
          </div>
          </div>
        <div className="slider_box_right">
          <div className="slider_box_right_box">
            <img
              src={sliderData[idNumber].nftImage}
              alt=""
               className='slider_box_right_box_img'
            />
            <div className="slider_box_right_box_like">
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
        </div>
      </div>
    </div>
        </div>
  );
}

export default NFTSlider