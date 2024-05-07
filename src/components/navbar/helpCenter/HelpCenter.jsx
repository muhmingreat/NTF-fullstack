import React from 'react'
import './HelpCenter.css'

const HelpCenter = () => {

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

  return (
    <div className='box'>
      {helpCenter.map((el, i)=> (
        <div  key={i+ 1}className='helpCenter'>
          <a href={`${el.link}`}>{el.name}</a>
        </div>
      ))}
    </div>
  )
}

export default HelpCenter