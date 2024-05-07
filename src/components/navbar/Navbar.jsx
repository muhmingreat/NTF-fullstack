import './Navbar.css'
import React,{useState,useEffect} from 'react'
import {MdNotifications} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'
import {CgMenuLeft, CgMenuRight} from 'react-icons/cg'
import {Discover, Notification,
    HelpCenter,Profile,Sidebar} from './index';
import {Button} from '../componentIndex'

const Navbar = () => {

    // USESTATE COMPONENT
const [discover, setDiscover] = useState(false);
const [help, setHelp] = useState(false)
const [profile, setProfile] = useState(false)
const [notification, setNotication] = useState(false)
const [openSideMenu, setOpenSideMenu] = useState(false)


const openMenu = (e) => {
  const btnText = e.target.innerText;
  if(btnText === 'Discover') {
    setDiscover(true);
    setHelp(false)
    setNotication(false)
    setProfile(false)
  }else if(btnText === 'Help Center') {
    setDiscover(false);
    setHelp(true)
    setNotication(false)
    setProfile(false)
  }else{
    setDiscover(false);
    setHelp(false)
    setNotication(false)
    setProfile(false)
  }
}
const openNotification = () => {
  if(!notification) {
    setNotication(true);
    setDiscover(false);
    setHelp(false)
    setProfile(false)
  }else{
    setNotication(false)
}
}
const openProfile = () => {
  if(!profile){
    setProfile(true);
    setDiscover(false);
    setHelp(false)
    setNotication(false)
  }else{
    setProfile(false)
 }

}
const openSidebar = () => {
if(!openSideMenu) {
  setOpenSideMenu(true)
}else{
  setOpenSideMenu(false)
}
}
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_container_left">
          <div className="logo">
            <img src="" alt="" width={100} height={100} />
          </div>

          <div className="navbar_container_left_box_input">
            <div className="navbar_container_left_box_input_box">
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className="search_icon" />
            </div>
          </div>
        </div>
        
        {/* End Of Left Section */}
        <div className="navbar_container_right">
          <div className="navbar_container_right_discover">
            {/* DISCOVER MENU */}

            <p onClick={(e) => openMenu(e)}>Discover </p>
            {discover && (
              <div className="navbar_container_right_discover_box">
                <Discover />
              </div>
            )}
          </div>

        <div className="navbar_container_right_help">
          <p onClick={(e) => openMenu(e)}>Help Center</p>
          {help && (
            <div className="navbar_container_right_help_box">
              <HelpCenter />
            </div>
          )}
        </div>

        {/* NOtification */}
        <div className="navbar_container_right_notify">
          <MdNotifications
            className="notify"
            onClick={() => openNotification()}
          />
          {notification && <Notification />}
        </div>

        {/* CREATE BUTTON */}
        <div className="navbar_container_right_button">
          <Button btnName="Create"  handleClick={() => {}}/>
        </div>

        {/* User  Profile*/}
        <div className="navbar_container_right_profile_box">
          <div className="navbar_container_right_profile">
            <img
              src="muhmin.jpg"
              alt=" "
              onClick={() => openProfile()}
              className="navbar_container_right_profile"
              width={40}
              height={40}
            />
            {profile && <Profile />}
          </div>
        </div>

        {/* Menu Button */}
        <div className="navbar_container_right_menuBtn">
          <CgMenuRight className="menuIcon" onClick={() =>
           openSidebar()} />
        </div>
        </div>
      </div>

      {/* SIDEBAR COMPONENT */}
      {openSideMenu && (
        <div className="sidebar">
          <Sidebar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
}

export default Navbar