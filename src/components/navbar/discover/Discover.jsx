import {Link} from 'react-router-dom'
import './Discover.css'
import {useState} from 'react'

const Discover = () => {

  
  // ---------Discover Nav Menu
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
  return (
    <div>
      {discover.map((el, i )=> (
        <div key={i + 1} className='discover'>
          <Link to={{patname:`${el.link}`}}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Discover