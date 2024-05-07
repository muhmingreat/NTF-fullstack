import React from 'react'
import './Profile.css'
import {FaUserAlt, FaRegImage, FaUserEdit}
 from'react-icons/fa'
 import {MdHelpCenter} from 'react-icons/md'
 import { TbDownloadOff, TbDownload} from 'react-icons/tb';
import { Link } from 'react-router-dom';
 
const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile_account'>
        <img src="muhmin.jpg" alt="" 
        className='profile_account_img' width={100} height={100}/>
       <div className='profile_account_info'>
        <p> Ayatullah Muhmin</p>
        <small >0x1324566dfb...</small>
      </div>
      </div>
        <div className='profile_menu'>
          <div className='profile_menu_one'>
            <div className='profile_menu_one_item'>
              <FaUserAlt/>
              <p>
              <Link to={{pathname:'/myProfile'}}> My Profile</Link>
            </p>
            </div>
            <div className='profile_menu_one_item'>
              <FaRegImage/>
              <p>
              <Link to={{ pathname:'/my-items'}}> My Items</Link>
            </p>
            </div>
            <div className='profile_menu_one_item'>
              <FaUserEdit/>
              <p>
              <Link to={{pathname:'/edit-profile'}}> Edits Profile</Link>
            </p>
            </div>
                </div>
              <div className='profile_menu_two'>
                <div className='profile_menu_one_item'>
                  <MdHelpCenter/>
                  <p>
                    <Link to={{pathname:'/help'}}> Help</Link>
                  </p>
                </div>
                <div className='profile_menu_one_item'>
                  <TbDownload/>
                  <p>
                    <Link to={{pathname:'/disconnet'}}> Disconnect</Link>
                  </p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Profile