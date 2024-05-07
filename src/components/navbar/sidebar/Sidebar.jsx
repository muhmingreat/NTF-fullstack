import React ,{useState} from 'react'

import {SiEthereum} from "react-icons/si"
import { GrClose} from 'react-icons/gr'
import {TiSocialFacebook , TiSocialLinkedin,
  TiSocialTwitter, TiSocialInstagram,
  TiSocialYoutube, TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/ti'
import './Sidebar.css'
import { Button } from '../../componentIndex'
import { Link } from 'react-router-dom'

const Sidebar = ({setOpenSideMenu}) => {

  const[openDiscover, setOpenDiscover] = useState(false)
  const[openHelp, setOpenHelp] = useState(false)
//  --------------DISCOVER NAV MENU
  const discover = [
    
    {
      name:"Collection",
      link:'collection'
    },
      {
      name:"Search",
      link:"search"
    },
    {
      name:'Author Profile',
      link:'author-details'
    },
    {
      name:'NFT Details',
      link:'NFT-details'
    },
    
    {
      name:'Connect wallet',
      link:'connet-wallet'
    },
    {
      name:'Blog',
      link:'blog'
    },
    
  ]
  // --------HELP CENTETR
const helpCenter =[
  {
    name:'About',
    link:'about'
  },
  {
    name:'Contant Us',
    link:'contact-us'
  },
  {
    name:'Sign Up',
    link:'sign-up'
  },
  {
    name:'Sign In',
    link:'sign-in'
  },
  {
    name:'Subscription',
    link:'subcription'
  },
]  

const openDiscoverMenu = () => {
  if(!openDiscover) {
setOpenDiscover(true);
  }else{
    setOpenDiscover(false);
  }
}
  const openHelpMenu = () => {
    if(!openHelp) {
      setOpenHelp(true);
    }else{
      setOpenHelp(false);
    }
  }

const closeSidebar = () => {
setOpenSideMenu(false)
}
  return (
    <div className='sidebar'>
      <GrClose className='sidebar_closeBtn'
      onClick={()=> closeSidebar()}/>
      <div className='sidebar_box'>
        <img src="muhmin.jpg" alt="" 
        width={100} height={100}  style={{borderRadius:"50%", marginBottom:"1.5rem"}}/>
         {/* <SiEthereum width={300} height={300} style={{borderRadius:"50%", marginBottom:"1.5rem"}}/>  */}
        <p> Discover The most outstanding article on all topics of Nft</p>
      <div className='sidebar_social'>
       <a href="#" >
        <TiSocialFacebook/>
        </a>
       <a href="#">
        <TiSocialLinkedin/>
        </a>
       <a href="#">
        <TiSocialYoutube/>
        </a>
       <a href="#">
        <TiSocialInstagram/>
        </a>
       <a href="#">
        <TiSocialTwitter/>
        </a>
      </div>
      </div>
     <div className='sidebar_menu'>
      <div>
      <div className='sidebar_menu_box'
      onClick={() => openDiscoverMenu()}>
        <p> Discover</p>
        <TiArrowSortedDown/>
      </div>
      {
        openDiscover && (
          <div className='sidebar_discover'>
            {discover.map((el, i) => (
              <p key={i + 1}>
               <Link to={{pathname:`${el.name}`}}> {el.name}</Link>
              </p>
            ))}
          </div>
        )}
          </div>
        <div>
          <div className='sidebar_menu_box' onClick={()=> openHelpMenu()}>
           <p> Help Center</p>
           <TiArrowSortedUp/> 
        </div>
        {openHelp && (
          <div className='sidebar_discover'>
            {helpCenter.map((el,i) => (
              <p key={i +1}>
                <Link to={{pathname: `${el.link}`}}>{el.name}</Link>
              </p>
            ))}
          </div>
        )}
      </div>
     </div>
     <div className='sidebar_button'>
      <Button btnName='Create' handleClick={() => {}}/>
      <Button btnName='Conect Wallet' handleClick={() => {}}/>
     </div>
    </div>
  )
}

export default Sidebar