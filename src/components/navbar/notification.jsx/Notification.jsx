import React from 'react'
import './Notification.css'
const Notification = () => {
  return (
    <div className='notification'>
      <h4> Notification</h4>
      <div className='notification_box'>
        <div className='notification_box_img'>
          <img src="muhmin.jpg" alt="" width={50} height={50}/>
        </div>
        <div className='notification_box_info'>
          <p> Ayatullah Muhmin</p>
          <p>Measure action your user..</p>
          <small>3 Minute ago</small>
          </div>
          <span className='notification_box_new'></span>
      </div>
    </div>
  )
}

export default Notification